import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="language" content="Portuguese"></meta>
        <meta name="author" content="Agropecuária D'Lucca"></meta>
        <meta
          name="keywords"
          content="Agropecuária D'Lucca, agropecuária, pet shop, animais de estimação, alimentos para animais, acessórios para animais, serviços para animais, veterinário, consulta veterinária, vacinas veterinária"
        ></meta>
        <meta
          name="description"
          content="Agropecuária D'Lucca é uma agropecuária e pet shop especializada em produtos e serviços para animais de estimação. Oferecemos consulta veterinária com preço acessível e uma ampla variedade de alimentos, acessórios e serviços de qualidade. Visite-nos hoje mesmo!"
        ></meta>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link rel="icon" href="/favicon.jpg" />
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

        <Script
          onReady={() => {
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = '2.0';
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js',
            );
            fbq('init', '3538545923132741');
            fbq('track', 'PageView');

            <noscript>
              <img
                height="1"
                width="1"
                style="display:none"
                src="https://www.facebook.com/tr?id=3538545923132741&ev=PageView&noscript=1"
              />
            </noscript>;
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
