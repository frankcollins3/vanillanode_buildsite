.App {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1.75fr 0.05fr;
  gap: 0px 0px;
  grid-template-areas:
    'navbar'
    'main'
    'credits';
  width: 75vw;
  height:70vh;

  margin: 0 auto;
}

// this application that uses puppeteer.evaluate() for DOM targeting could be laid out with this as 1 of several grid options. ['navbar', 'main', 'credits'] very simple.
// should be fairly simple to loop and ask if user wants to edit a certain element or populate a certain element with an <h1> or <img>

