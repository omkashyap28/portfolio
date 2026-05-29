import { Main, Heading1, Container } from "../components"

export default function Resume() {
  return (
    <Container>
      <Main>
        <Heading1 heading="My Resume / CV" className="mt-16 mb-8" />
        <div className="h-[100vh]">
          <iframe
            src="/HariomKashyapResume.pdf"
            className="h-full w-full rounded-lg border border-gray-200"
            title="PDF Viewer"
          />
        </div>
      </Main>
    </Container>
  );
}