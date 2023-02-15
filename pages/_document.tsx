import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="신초이 Cho-I Shin | Spring, Python, JavaScript, TypeScript, Next.js, HTMLCanvas, AWS 등 다양한 개발 언어와 도구, 프레임워크와 환경을 사랑하는 풀스택 웹 개발자의 포토폴리오 사이트 입니다. 현재 진행 중인 프로젝트와 ver.1 개발을 종료한 프로젝트를 보실 수 있습니다."
          />
          <meta
            name="keywords"
            content="Java, Spring, Python, Chatbot, Canvas, JavaScript, Next.js, TypeScript, Front-End, Back-End, Fullstack, Developer, Portfolio, AWS, 웹개발자, 코딩, 프로그래밍, 개발자포트폴리오, 프로그래머, 웹개발자포트폴리오"
          />
          <meta name="author" content="Choi Shin" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com/page.html" />
          <meta property="og:title" content="신초이 | Fullstack Developer" />
          <meta
            property="og:description"
            content="풀스택 개발자 신초이의 포트폴리오에 오신 것을 환영 합니다. 호기심과 그에 걸맞은 실천력, 문제를 해결하고자 하는 근성, 사용자가 보기 좋은 화면을 출력하고 결합도가 낮은 코드를 짜기 위해 모듈화에 대해 고민하는 개발자입니다. 게임과 레고를 좋아합니다."
          />
          <meta property="og:image" content="https://example.com/image.jpg" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
