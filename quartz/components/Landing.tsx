import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import Search from "./Search"
import Graph from "./Graph"
import Footer from "./Footer"
import Darkmode from "./Darkmode"


export default (() => {

  const customGraphOptions = {
    localGraph: {
      drag: true,  // Disable dragging in the local graph
      zoom: true,
      depth: 2,     // Increase the depth for the local graph
      scale: 1.5,
      repelForce: 0.8,
      centerForce: 0.4,
      linkDistance: 50,
      fontSize: 0.8,
      opacityScale: 0.9,
      removeTags: [],
      showTags: true,
      focusOnHover: true,
    },
    globalGraph: {
      drag: true,
      zoom: true,
      depth: 3,     // Set depth for the global graph
      scale: 0.8,
      repelForce: 0.6,
      centerForce: 0.4,
      linkDistance: 50,
      fontSize: 0.8,
      opacityScale: 1,
      removeTags: [],
      showTags: true,
      focusOnHover: true,
    }
  }

  const SearchComponent = Search()
  const GraphComponent = Graph(customGraphOptions)
  const FooterComponent = Footer()
  const DarkmodeComponent = Darkmode()

  function Landing(componentData: QuartzComponentProps) {
    return (
      <>
        <nav class="navbar">
          <div class="container">
            <h1 class="logo">AI Safety Research Compass</h1>
            <ul class="nav-links">
              <li><a href="#"><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a></li>
              <li><a href="#"><svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="currentColor"></path></svg></a></li>
              <li>
                <DarkmodeComponent {...componentData} />
              </li>
            </ul>
          </div>
        </nav>
        <section class="hero">
          <div class="container hero-content">
            <div class="left">
              <div class="left-container">
                <h2>Conduct your Research on AI Safety</h2>
                <p>Dive into the dynamic world of AI Safety Research with our interactive tool!</p>
                <p> Our platform is designed to make navigating the complex landscape of AI alignment easier and more intuitive for everyone—from newcomers to seasoned researchers.</p>
                <p>Explore the relationships between various topics and subtopics in AI alignment through a visually engaging and interactive graph.</p>
              </div>
            </div>
            <div class="right">
              <GraphComponent {...componentData} />
              <div class="graph-legend" style='display: flex; gap: 10px; justify-content: end; margin-top: 10px'>
                <div style='display: flex; align-items: center; gap: 3px;'>
                <div style='border: 1px, solid, #84a59d; width: 20px; height: 20px; border-radius: 50%; background-color: #84a59d;'></div>
                <p>Previously visited</p>
                </div>
                <div style='display: flex; align-items: center; gap: 3px'>
                <div style='border: 1px, solid, gray; width: 20px; height: 20px; border-radius: 50%; background-color: gray;'></div>
                <p>Not yet visited</p>
                </div>
                <div style='display: flex; align-items: center; gap: 3px'>
                <div style='border: 1px, solid, #284b63; width: 20px; height: 20px; border-radius: 50%; background-color: #284b63'></div>
                <p>Current Page</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class='content'>
          <div class="content-container">
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 5px; font-size: 1.5rem;'>400 Topics and Counting...</h2>
            <p>From a <a style="color: #23d5ab" href="https://github.com/moirage/alignment-research-dataset" target="_blank">dataset</a> of Arxiv sources, we have connected over 400 topics on AI safety to create an interactive graph which you can traverse visually. We're continuously adding research from more sources using APIs and scraping methods; our aim is to create the most informed and accessible, dynamically updated hub for AI safety research.</p>
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 5px; font-size: 1.5rem;'>Navigating the Site</h2>
            <p>The graph is fully interactive where each node represents a topic on AI Safety. You can zoom in and out by scrolling over the graph, and drag and drop nodes to rearrange the paths for clearer viewing. Clicking on a node will take you to that topic's page where you can continue using the graph or use the associated links to make connections and expand your understanding.</p>
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 5px; font-size: 1.5rem;'>Beginner Friendly</h2>
            <p>We believe it's important to expose the critical information surrounding AI safety so we've designed this application with a focus on accessibility and inclusivity. If you're new to the world of AI Safety, you can find a few good starting points as well as an introduction to AI Safety below. We also strongly encourage users to reach out to us if they have any questions or suggestions regarding the usage of this application.</p>
          </div>
        </section>
        <section class="search-content">
          <div class="container">
            <h2>Search through hundreds of research papers on AI</h2>
            <div class="search-wrapper-alt">
              <SearchComponent {...componentData} />
            </div>
          </div>
        </section>
        <section class="getting-started">
          <div class="container">
            <h2 style='font-weight: 500'>Can't decide where to start? We've picked some starter topics to get you going.</h2>
            <div class="card-row">
              <a href="/value-alignment">
                <div class="card">
                  <p>Value Alignment</p>
                </div>
              </a>
              <a href="/safety-and-robustness">
                <div class="card">
                  <p>Safety and Robustness</p>
                </div>
              </a>
              <a href="/Interpretability,-Explainability,-and-Transparency">
                <div class="card">
                  <p>Interpretability, Explainability, and Transparency</p>
                </div>
              </a>
              <a href="/Meta-learning,-Transfer-Learning,-and-Generalization">
                <div class="card">
                  <p>Meta-learning, Transfer Learning, and Generalization</p>
                </div>
              </a>
            </div>
            <div class="card-row">
              <a href="/Ethical-and-Societal-Implications-of-AI">
                <div class="card">
                  <p>Ethical and Societal Implications of AI</p>
                </div>
              </a>
              <a href="/AI-Governance-and-Policy">
                <div class="card">
                  <p>AI Governance and Policy</p>
                </div>
              </a>
              <a href="/AI-Architectures-and-Training-Methods">
                <div class="card">
                  <p>AI Architectures and Training Methods</p>
                </div>
              </a>
              <a href="/Human-AI-Interaction-and-Collaboration">
                <div class="card">
                  <p>Human-AI Interaction and Collaboration</p>
                </div>
              </a>
            </div>
            <div class="card-row">
              <a href="/Theoretical-Foundations-of-AI">
                <div class="card">
                  <p>Theoretical Foundations of AI</p>
                </div>
              </a>
              <a href="/AI-Benchmarks-and-Evaluation">
                <div class="card">
                  <p>AI Benchmarks and Evaluation</p>
                </div>
              </a>
              <a href="/AI-Security-and-Privacy">
                <div class="card">
                  <p>AI System Design and Governance</p>
                </div>
              </a>
              <a href="/AI-Security-and-Privacy">
                <div class="card">
                  <p>AI Security and Privacy</p>
                </div>
              </a>
            </div>
            <div class="card-row">
              <a href="/Biological-Inspiration-in-AI">
                <div class="card">
                  <p>Biological Inspiration in AI</p>
                </div>
              </a>
              <a href="/Relational-Reasoning">
                <div class="card">
                  <p>Relational Reasoning</p>
                </div>
              </a>
              <a href="/AI-Safety-State-Analysis">
                <div class="card">
                  <p>AI Safety State Analysis</p>
                </div>
              </a>
              <a href="/verification-and-validation">
                <div class="card">
                  <p>Verification and Validation</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section class="jump-to-basics-content">
          <div class="container">
            <h2>What is AI Safety?</h2>
            <div class="get-started">
              <a href="/basics"> 
                <div class="get-started-button">
                  <p>Learn Here</p>
                </div>
              </a>
            </div>
          </div>
          <img src="../static/medicine-crosses.svg" alt="" />
        </section>
        <section class="feedback">
          <div class="content-container narrow" style='padding-top: 50px; display: flex; flex-direction: column;'>
          <h2 style='border-left: solid 3px #23d5c0; padding-left: 5px; font-size: 1.5rem;'>We value your feedback</h2>
          <p>AI Safety Compass is a work in progress and we would love to hear from you during any stage of development. We appreciate all kinds of feedback so please don't hesitate to reach out to us here: <a style="text-decoration: none; color: #23d5ab"href="mailto:info.aicompass@gmail.com?subject=AI%20Safety%20Compass%20Feedback&body=Hi%20Team,%0A%0AHere%20is%20my%20feedback%20for%20the%20app:%0A%0ARating%20(1-5):%0A%0AComments:%0A%0A%5BWrite%20your%20feedback%20here%5D%0A%0AThank%20you!">info.aicompass@gmail.com</a></p>
          <a style="width: fit-content; align-self: center;" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3M7jUr1cmcBUn1wMlHgOFtEs96H1LbHkBgJ58Q3xlnSY_Qw/viewform?usp=header">
            <div class="get-started-button" style='border-color: #23d5ab; margin-top: 30px;'>
          <p style='color: #23d5ab;'>Feedback Form</p></div></a>
          {/* <iframe style="align-self: center"src="https://docs.google.com/forms/d/e/1FAIpQLSc3M7jUr1cmcBUn1wMlHgOFtEs96H1LbHkBgJ58Q3xlnSY_Qw/viewform?embedded=true" width="640" height="2008" frameborder="0">Loading…</iframe> */}
          </div>
        </section>
        <section>
          <div class='content-container narrow'>
                <h2 style="border-left: solid 3px #23d5c0; padding-left: 5px; margin-top: 0">About the AI Safety Research Compass</h2>
                <p>Designed to help navigating the complex landscape of AI Safety research, particularly for newcomers to the field.</p>
                <div style="display: flex; flex-direction: column; gap: 5; align-items: center; margin-top 30px">
              <h2>Join us on</h2>
              <div style='width: 200px; display: flex; justify-content: space-between'>
                <a href="#"><svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="#23d5ab" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>
                <a href="#"><svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" fill="#23d5ab"></path></svg></a>
                </div>
              </div>
            </div>
        </section>
        <section class='footer'>
          <div class="container">
            {/* <div class="svg-container" style='height: 150px; width: 150px'> */}
            {/* <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <circle class="spin2" cx="400" cy="400" fill="none"
      r="200" stroke-width="50" stroke="#E387FF"
      stroke-dasharray="700 1400"
      stroke-linecap="round" />
  </svg> */}
            {/* </div> */}
            <FooterComponent {...componentData} />
          </div>
        </section>
      </>
    )
  }

  Landing.css = landingStyle
  return Landing
}) satisfies QuartzComponentConstructor