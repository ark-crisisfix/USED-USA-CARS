export default function Home() {
  return (
    <main style="font-family: Arial, sans-serif; padding: 24px; margin: 0; background: #f5f7fb; min-height: 100vh;">
      <section style="max-width: 960px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08);">
        <h1>Used Cars from USA – MVP</h1>
        <p>Buy cars from Copart/IAAI with global delivery (Ukraine, UAE). Quick lead capture and simple conversion flow.</p>

        <div style="display: grid; gap: 12px; margin-top: 20px;">
          <div style="background:#eef2ff;border:1px solid #c7d2fe;padding:12px;border-radius:8px;"><strong>500+ cars sourced</strong></div>
          <div style="background:#d1fae5;border:1px solid #a7f3d0;padding:12px;border-radius:8px;"><strong>Avg saving 20-40%</strong></div>
          <div style="background:#fef3c7;border:1px solid #fde68a;padding:12px;border-radius:8px;"><strong>Delivery 4-10 weeks</strong></div>
        </div>

        <h2 style="margin-top:24px;">Request a quote</h2>
        <form action="#" method="post" style="display:flex;flex-direction:column;gap:10px;">
          <input type="text" name="name" placeholder="Name" required style="padding:8px;" />
          <input type="tel" name="phone" placeholder="Phone/WhatsApp" required style="padding:8px;" />
          <input type="text" name="budget" placeholder="Budget" style="padding:8px;" />
          <select name="destination" style="padding:8px;"><option value="ukraine">Ukraine</option><option value="uae">UAE</option></select>
          <button type="submit" style="padding:10px; background:#2563eb;color:#fff;border:none;border-radius:8px;cursor:pointer;">Send request</button>
        </form>

        <p style="font-size:0.85rem; color:#6b7280; margin-top:18px;">We contact you within 15 minutes with exact pricing estimate.</p>
      </section>
    </main>
  )
}
