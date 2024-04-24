
// Function to generate RSS feed XML
function generateRSSFeed() {
    // Create RSS document
    let rssDoc = document.implementation.createDocument(null, 'rss');
    rssDoc.documentElement.setAttribute('version', '2.0');
  
    // Create channel element
    let channel = rssDoc.createElement('channel');
    rssDoc.documentElement.appendChild(channel);
  
    // Add channel metadata
    addElement(channel, 'title', 'Insights - Hologuti Business Centre');
    addElement(channel, 'link', 'https://insights.hologutibusinesscentre.com/');
    addElement(channel, 'description', 'Insightful info on social interest, education application, health and technology');
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
      <img src="https://i.postimg.cc/vB4c7zb2/3mtt-400x400.jpg">
    `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/technology/threeTT');
    addElement(article, 'pubDate', new Date().toUTCString());


            // second article //
    addElement(article, 'title', 'Federal Government MSME and Manufacturing Businesses Loan');
    addElement(article, 'description', `
        <img src="https://i.postimg.cc/Prd0JWD6/federal-grant-loan-1.webp">
        <h1>The Federal Government Lunches Loan Application for MSME And Manufacturing Segment of The Presidential 200 Billion Naira Fund</h1>
        <article>
        <section>
          <p>The Federal Government of Nigeria is set to disburse funds to <i>Micro, Small and Medium Enterprises,</i>  and the <i>Manufacturing Businesses as well.</i>
            This announcement was made known by the <b>Honourable Minister Dr. Doris Nkiruka Uzoka-Anite MD, CFA</b>, through one of her official social handle accounts. 
          </p>
          <p>The Federal Government of Nigeria has recently started funds disbursement to applicants who applied under the <em>Presidential Conditional Grant Scheme (now closed)</em>, to support nano businesses, to revitalize businesses that have been harmfully affected by economic challenges. 
              The Government has further taken a bold step towards promoting the growth of businesses and job creation in the country by launching the <strong>MSME and Manufacturing Fund</strong>, to provide much needed financial support to businesses in these key sectors. 
          </p>
          <p>The government has allocated 75 billion naira to each sector. Under the MSME component of the fund, enterprises are eligible to receive up to 1 million naira in loans, while manufacturing companies can access loans of up to 1 billion naira. 
              This injection of capital will enable businesses to expand their operations, grow their businesses, create jobs, and contribute to the overall economic development of the country.
            </p>
        </section>
        <section class="criteria">
          <img src="/assets/eligibility.jpg" alt="eligibility">
          <h2>Eligibility and Application Process</h2>
          <div>
            <h3>The Loan Eligibility Criteria (for MSME loan up to 1 million Naira)</h3>
            <ul>
            <span>A&#41;. Eligibility Criteria: -</span>
              <ul>
              <li>Must be an existing business in operation for at least one year, or a registered start-up.</li>
              <li>Provide CAC registration documents.</li>
              <li>Present company's Bank Statement for existing businesses or Chief Promoter's Bank Statement for start-up.</li>
              <li>Fulfil required monthly turnover and comply with other requirements specified by the bank.</li>
              </ul>
              </ul>
              <ul>
              <span>B&#41;. Security: -</span>
              <ul>
                <li>Provide a Personal Guarantee of the promoter</li>
                <li>Agree to BVN convenant</li>
                <li>Adhere to Global Standing Instruction (GSI) and other securities as required by the bank</li>
              </ul>
              </ul>
              <ul>
              <span>C&#41;. Repayment Frequency: -</span>
                <ul>
                <li>Monthly equal instalments with no moratorium, spanning a 3-year term.</li>
                </ul>
              </ul>
            </div>
              <div>
                <h3>For Manufacturers (For Loans up to 1 Billion Naira)</h3>
                <ul>
                  <li>Choose between Working Capital or Asset Financing.</li>
                  <li>Maintain at least a 6-month business/corporate banking relationship.</li>
                  <li>Provide additional documentation as required by the bank.</li>
                  <li>Asset Financing comes with a 5-year repayment period, and Working Capital Financing includes a 6-month moratorium on principal and interest, followed by a 12-month equal. instalment repayment plan.</li>
                </ul>
              </div>
          </section>
          <Section>
            <p>The ministry invites all eligible enterprises to join this transformative</p>
            <a href="https://loan.fedgrantandloan.gov.ng/" target="_blank">Apply Here</a>
          </Section>
          </article>
        `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/interest/FG-large-and-MSME_loan');
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
  