import { Html, Head, Main, NextScript } from "next/document";;

export default function Document() {
    return (
        <Html lang="ja">
            <Head>
                <link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
