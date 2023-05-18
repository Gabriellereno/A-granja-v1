import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="language" content="Portuguese"></meta>
        <meta name="author" content="Granja D'Lucca"></meta>
        <meta
          name="keywords"
          content="Granja D'Lucca, agropecuária, pet shop, animais de estimação, alimentos para animais, acessórios para animais, serviços para animais, veterinário, consulta veterinária, vacinas veterinária"
        ></meta>
        <meta
          name="description"
          content="Granja D'Lucca é uma agropecuária e pet shop especializada em produtos e serviços para animais de estimação. Oferecemos consulta veterinária com preço acessível e uma ampla variedade de alimentos, acessórios e serviços de qualidade. Visite-nos hoje mesmo!"
        ></meta>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="icon" href="/logo.jpeg" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
