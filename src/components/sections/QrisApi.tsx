import React, { useState } from "react";
import { QrCode, Terminal, CheckCircle2, AlertCircle } from "lucide-react";

const QrisApiSection = () => {
  const [nominal, setNominal] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const [error, setError] = useState("");

  // String QRIS Statis Anda
  const QRIS_STATIS = "00020101021126610016ID.CO.SHOPEE.WWW01189360091800228359950208228359950303UMI51440014ID.CO.QRIS.WWW0215ID10264965189490303UMI5204572253033605802ID5904SIIN6006JEPARA61055946262070703A016304163E";

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!nominal || Number(nominal) < 1000) {
      setError("Minimum amount is Rp 1.000");
      return;
    }

    setLoading(true);
    setError("");
    setQrUrl("");

    try {
      // Memanggil API Cloudflare Worker Anda
      const response = await fetch("https://anggeraji.web.id/qris/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          qris_statis: QRIS_STATIS,
          amount: nominal.toString(),
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        // Mengubah string QRIS menjadi gambar menggunakan QRServer API
        const encodedString = encodeURIComponent(data.qris_string);
        setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedString}`);
      } else {
        setError(data.message || "Failed to generate QRIS");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="qris-api" className="border-b border-foreground pb-12 pt-12">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <QrCode className="w-8 h-8 text-primary" />
            <h2 className="section-title">Dynamic QRIS API</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base">
            A serverless API built with Cloudflare Workers to instantly convert static QRIS 
            strings into dynamic ones by calculating the CRC16 checksum on the edge. 
            Designed for POS systems and Telegram/WhatsApp Bots.
          </p>
          <div className="flex gap-2 mt-4">
            <span className="brutal-tag text-xs bg-foreground text-background">Cloudflare Workers</span>
            <span className="brutal-tag text-xs bg-foreground text-background">Serverless</span>
            <span className="brutal-tag text-xs bg-foreground text-background">JavaScript</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Column: Documentation */}
          <div className="flex flex-col space-y-6">
            <div className="brutal-card p-6 h-full">
              <div className="flex items-center gap-2 mb-4 border-b border-foreground/20 pb-3">
                <Terminal className="w-5 h-5" />
                <h3 className="font-mono font-bold text-lg">API Documentation</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Endpoint</p>
                  <code className="text-sm bg-muted/50 p-1.5 px-3 rounded-md border border-foreground/20 block font-mono">
                    POST https://anggeraji.web.id/qris/api
                  </code>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Request Body (JSON)</p>
                  <pre className="text-xs bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-md overflow-x-auto font-mono">
{`{
  "qris_statis": "000201010211...6304163E",
  "amount": "50000"
}`}
                  </pre>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">Success Response</p>
                  <pre className="text-xs bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-md overflow-x-auto font-mono border-l-4 border-green-500">
{`{
  "status": "success",
  "message": "QRIS berhasil dihasilkan",
  "qris_string": "000201010212...540550000...<CRC16>"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Demo */}
          <div className="flex flex-col">
            <div className="brutal-card p-6 flex flex-col items-center justify-center min-h-[400px] bg-muted/10 relative overflow-hidden">
              <h3 className="font-mono font-bold text-lg mb-2 w-full text-left">Live Demo</h3>
              <p className="text-sm text-muted-foreground mb-6 w-full text-left">
                Try it out! Enter an amount and the API will generate a scannable dynamic QR code for <strong className="text-foreground">SIINMEDIA</strong>.
              </p>

              <form onSubmit={handleGenerate} className="w-full max-w-xs flex flex-col gap-3 mb-6">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-muted-foreground">Rp</span>
                  <input
                    type="number"
                    value={nominal}
                    onChange={(e) => setNominal(e.target.value)}
                    placeholder="10000"
                    className="w-full pl-10 pr-4 py-2 border border-foreground rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground font-mono py-2 rounded-md border border-foreground hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "Generate Dynamic QRIS"
                  )}
                </button>
              </form>

              {error && (
                <div className="w-full max-w-xs flex items-center gap-2 text-red-500 text-sm mb-4 bg-red-500/10 p-2 rounded border border-red-500/20">
                  <AlertCircle className="w-4 h-4" />
                  <p>{error}</p>
                </div>
              )}

              {/* QR Image Placeholder / Result */}
              <div className="w-[200px] h-[200px] border-2 border-foreground border-dashed rounded-xl flex items-center justify-center bg-background relative">
                {qrUrl ? (
                  <div className="relative group p-2 bg-white rounded-lg">
                    <img 
                      src={qrUrl} 
                      alt="Dynamic QRIS Result" 
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-1 border-2 border-background">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                ) : (
                  <QrCode className="w-12 h-12 text-muted-foreground/30" />
                )}
              </div>
              
              {qrUrl && (
                <p className="text-xs text-muted-foreground mt-4 font-mono">
                  Scan to test (Official SIINMEDIA QRIS)
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QrisApiSection;