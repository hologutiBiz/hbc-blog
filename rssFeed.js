
// Function to generate RSS feed XML
function generateRSSFeed() {
    // Create RSS document
    let rssDoc = document.implementation.createDocument(null, 'rss');
    rssDoc.documentElement.setAttribute('version', '2.0');
  
    // Create channel element
    let channel = rssDoc.createElement('channel');
    rssDoc.documentElement.appendChild(channel);
  
    // Add channel metadata
    addElement(channel, 'title', 'Insights - Technology');
    addElement(channel, 'link', 'https://insights.hologutibusinesscentre.com/technology');
    addElement(channel, 'description', '3MTT launched job application portal');
    addElement(channel, 'language', 'en-us');
    addElement(channel, 'lastBuildDate', new Date().toUTCString());
  
    // Add article (item) elements
    let article = rssDoc.createElement('item');
    channel.appendChild(article);
  
    addElement(article, 'title', 'The 3MTT Job Opportunity');
    addElement(article, 'description', `
      <p>The <b>3 Million Technical Talent (3MTT)</b> program is a pivotal initiative under the <em>Federal Ministry of Communication, Innovation and Digital Economy &#40;FMCIDE&#41;</em> in Nigeria, aimed at harnessing and developing the vast tech talent within the country, through comprehensive training, mentorship, and support, which will foster a culture of innovation that will contribute to the digital economy of Nigeria and putting Nigeria technical talents at the global level. In achieving its desired goal, the 3MTT had lunched <b>3mtt JobBoard platform</b>. This platform offers a unique opportunity to connect job applicants to hiring companies.</p>
      <p>The platform is specifically designed to make the job search process easier and more efficient for both job seekers and hiring companies, and to also give individual who had participated in the 3MTT initial program, an environment to deploy their skills. Interested individuals are employed to explore the <i>3mtt JobBoard portal</i>, create a profile to benefit in the exciting opportunity.</p>
      <p>Current Openings and How to Apply:</p>
      <ol>
        <li>Visit the official 3MTT portal to <a href="https://3mtt.seamlesshiring.com/">sign up.</a></li>
        <li>Browse the list of hiring company and available positions.</li>
        <li>Select the role that aligns with your qualifications.</li>
        <li>Submit your application along with your resume and any required documents.</li>
      </ol>
    `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/technology/t0000001');
    addElement(article, 'pubDate', new Date().toUTCString());
  
    // Serialize XML document to string
    let serializer = new XMLSerializer();
    let xmlString = serializer.serializeToString(rssDoc);
  
    return xmlString;
  }
  
  // Function to add child element to parent element
  function addElement(parent, name, text) {
    let element = parent.ownerDocument.createElement(name);
    if (typeof text === 'string') {
      element.textContent = text;
    }
    parent.appendChild(element);
  }
  
  // Generate RSS feed XML
  let rssXml = generateRSSFeed();
  console.log(rssXml);
  