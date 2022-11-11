import '../styles/globals.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
      <div style={{
        backgroundColor: "green",
        padding: "20px",
      }}>
        <div>
          <a href='/' style={{marginRight:"30px"}}>Home</a>
          <a href='/assinatura'>Pagamento</a>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}