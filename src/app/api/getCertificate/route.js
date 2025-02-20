import { list } from "@vercel/blob";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ message: "Valid email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Extract username from email (part before @)
    const username = email.split('@')[0];

    // Fetch blobs from certificates folder
    const { blobs } = await list({
      prefix: "certificates/",
    });

    // Find certificate with xianze_{username} naming
    const certificate = blobs.find((blob) => 
      blob.pathname === `certificates/xianze_${username}`
    );

    if (!certificate) {
      return new Response(JSON.stringify({ message: "Certificate not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ certificateUrl: certificate.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      message: "Server error", 
      error: error.message 
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}