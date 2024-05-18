
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


            // third article //
    addElement(article, 'title', 'Nigeria lunches Credit facilitating platform');
    addElement(article, 'description', `            
          <img src="https://i.postimg.cc/mgRszqzz/Credi-Corp-removebg-preview.png">
          <h1>Nigeria Consumer Credit Corporation (CrediCorp)</h1>
          <p>Nigeria lunches Credit facilitating platform, <b>Nigeria Consumer Credit Corporation (CrediCorp)</b>. 
              The company is owned by the Federal Government of Nigeria with the primary goal of increasing 
              access to consumer credit for 50% of the working population in Nigeria by 2030.
          </p>
          <p><b>CrediCorp</b> focuses on strategies that addresses barriers to accessing credit.  
              IT is dedicated to collaborating with key stakeholders such as the Central Bank of Nigeria and various entities within the financial sector,
              providing capital and guarantees. 
          </p>
          <p>The corporation’s business operations concentrate on enhancing access to consumer credit in Nigeria. 
              The corporation will implement a unifying credit registry using the <em>National Identification Number (NIN)</em>, 
              to provide credit guarantees to financial institutions to accelerate people-centred credit products and incentive purchase of locally manufactured goods and services.
          </p>
          <p>The Credit scheme will roll out in two phases starting from <time datetime="2024-05-01"><b>May 2024</b></time>. 
              The 1st phase is categorised into 3 sections which comprise <i>Federal, State Civil Servants and White collar & informal workers</i> 
              (covering over 28 million population), to be completed in <time datetime="2024-12-31"><b>December 2024</b></time>. 
              The 2nd phase which covers the <i>General public</i> (73 million population) will commence the following year.
          </p>
          <p>To register, visit CredCrop official <a href="https://www.credicorp.ng/">website</a>.</p>
        `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/interest/CrediCorp');
    addElement(article, 'pubDate', new Date().toUTCString());


            // fourth article //
    addElement(article, 'title', 'New Deadline for Nigeria Diaspora Fund, Expression of Interest submission');
    addElement(article, 'description', ` 
        <img src="https://i.postimg.cc/Prd0JWD6/federal-grant-loan-1.webp">
        <h1>Federal Ministry of Industry, Trade, and Investment announces New Deadline for Nigeria Diaspora Fund Expression of Interest</h1> 
        <article>
            <p>
                The <em> Federal Ministry of Industry, Trade, and Investment</em> wishes to inform stakeholders that 
                the deadline for the submission of <b>Expressions of Interest (EOI)</b> for the Nigeria Diaspora Fund 
                has been extended to <time datetime="2024-05-13"><b>13th May 2024</b></time>. 
                The extension has been granted considering the need for all stakeholders to have adequate time to prepare 
                and submit their application within the set guidelines for the $10 billion Nigeria Diaspora Fund. 
            </p>

            <p>
                Notably, the EOI opportunity is open to Fund Managers who are interested in contributing to the creation 
                of a multisectoral, multilateral private sector-led investment fund. 
                Prospective applicants are strongly advised to use the additional time to refine their submissions 
                to ensure that their assessments meet all the.
            </p>

            <p>For further information, please visit the official website at <a href="https://nigeriadiasporafund.gov.ng/" class="official-web"> www.nigeriadiasporafund.gov.ng</a></p>
        </article>
    `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/interest/EOI-extension');
    addElement(article, 'pubDate', new Date().toUTCString());


            // fifth article //
    addElement(article, 'title', 'How to Check JAMB 2024 Result');
    addElement(article, 'description', `    
        <img src="https://i.postimg.cc/NjKxY5gT/JAMB-2024-RESULT.png"> 
        <h1>JAMB clarifies candidates on the only way to check 2024 UTME Result</h1>
        <article>
            <p>
              The <b>Joint Admissions and Matriculation Board</b> clarifies to candidates the only way to check the 2024 UTME results, 
              contrary to the claims circulating on social media, where some individuals are flaunting printed result slips.
            </p>
            <p>
              In previous years, candidates could access their results through the Board’s website. 
              However, the procedure for checking the 2024 UTME results has changed; unlike before, 
              the results  <b><em>are not available</em></b>  in hard format currently and <b><em>cannot not be accessed</em></b> on the Board’s website.
              Candidates are advised to be wary of any person who makes such a claim.
            </p>
            <p>
              The Board instructs the public that the only way to check the 2024 UTME results is by sending <b class="sending-UTME">‘UTMERESULT’ to 55019 or 66019</b>  
              using the same phone number that the candidate used for UTME registration.
            </p>
            <p>
              <i>Additionally, candidates wishing to access services provided by the Board, other than the UTME, 
                  must create a profile by sending their NIN to 55019 or 66019 from the phone number they intend to use for all Board-related communications.
              </i>
            </p>
            <p>
              Therefore, the public is advised to avoid using third-party services for result retrieval and is urged to follow the method specified by the Board to access results.
            </p>
        </article>
    `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/education/jamb-2024-result');
    addElement(article, 'pubDate', new Date().toUTCString());

            
    // article 6 //
    addElement(article, 'title', "Nigeria's Student Loan Scheme");
    addElement(article, 'description', ` 
          <main>
          <div class="intro">
              <img src="https://i.postimg.cc/tTkzk47t/nelf-logo.jpg" alt="nelf logo">
              <h1>Nigeria's Student Loan Application Portal</h1>
          </div>
          <hr>
          <article>
              <p>
                  In a significant move to bolster higher education and alleviate the financial burden on students, 
                  the Federal Government of Nigeria is set to launch the long-awaited <b>Student Loan Scheme</b>. 
                  After a period of anticipation and meticulous planning, the government is set to officially open the <em>student loan application portal</em> which is said to commence on <time datetime="2024-05-24"><b>May 24th, 2024</b></time>.
              </p>
          
              <p>
                  This groundbreaking initiative aims to provide a lifeline to students across the nation, 
                  ensuring that financial constraints do not hinder the pursuit of academic excellence. 
                  The scheme is designed to be inclusive, catering to a wide range of students who aspire to further their education but lack the necessary resources.
              </p>
          
              <p>
                  As the launch date approaches, students are encouraged to prepare and to take advantage of this opportunity. 
                  The scheme is not just a financial arrangement; it is a beacon of hope, symbolizing the government's resolve to empower the youth through education.
              </p>
          
              <p>
                  The Federal Government of Nigeria invites all eligible students to mark their calendars for <time datetime="2024-05-24"><b>May 24th, 2024</b></time>, 
                  and join in ushering in a new era of accessible education financing by visiting <a href="https://nelf.gov.ng/" target="_blank" class="nelf">nelf.gov.ng</a>. 
                  Stay tuned for more updates as we approach the launch of this transformative program.
              </p>
          </article>
      </main>
    `);
    addElement(article, 'link', 'https://insights.hologutibusinesscentre.com/education/2-FG-student-loan');
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
  