import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">LIN GUO</CardTitle>
          <p className="text-center text-muted-foreground">
            Email: <a href="mailto:contact@clareguo.com" className="text-primary hover:underline">contact@clareguo.com</a>
          </p>
        </CardHeader>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p>As a dedicated Product Manager with a strong background in data science, I specialize in delivering Business Intelligence and campaign analysis applications. My diverse career spans roles as a data scientist, IT consultant, and application engineer, providing me with extensive experience in architecture design and business analysis within banking and payment systems. I excel in strong communication, have a passion for data analysis, and possess a solid academic foundation in economic analysis and reporting. My expertise in leveraging purchase, demographic, and geo data allows me to drive innovative solutions and enhance marketing strategies for businesses.</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Tech Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>Product Management Tools:</strong> <Badge variant="secondary">Jira</Badge> <Badge variant="secondary">Confluence</Badge> <Badge variant="secondary">Notion</Badge> <Badge variant="secondary">Figma</Badge></li>
            <li><strong>Project Management Frameworks:</strong> <Badge variant="secondary">Agile</Badge> <Badge variant="secondary">Waterfall</Badge></li>
            <li><strong>Languages:</strong> <Badge variant="secondary">Python</Badge> <Badge variant="secondary">SQL</Badge> <Badge variant="secondary">Java</Badge> <Badge variant="secondary">C#</Badge> <Badge variant="secondary">R</Badge> <Badge variant="secondary">JavaScript</Badge></li>
            <li><strong>Cloud Platforms:</strong> <Badge variant="secondary">GCP</Badge> <Badge variant="secondary">AWS</Badge></li>
            <li><strong>GCP Tools:</strong> <Badge variant="secondary">BigQuery</Badge> <Badge variant="secondary">Looker Studio</Badge> <Badge variant="secondary">Cloud Function</Badge> <Badge variant="secondary">IAM</Badge> <Badge variant="secondary">Identity Platform</Badge></li>
            <li><strong>AWS Services:</strong> <Badge variant="secondary">RDS</Badge> <Badge variant="secondary">EC2</Badge> <Badge variant="secondary">Redshift</Badge></li>
            <li><strong>Version Control:</strong> <Badge variant="secondary">Git</Badge></li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Language Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>English:</strong> IELTS: 7.5, TOEIC: 925</li>
            <li><strong>Japanese:</strong> JLPT: N1</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><Badge variant="outline">Machine Learning</Badge> Stanford | Online Machine Learning (Coursera)</li>
            <li><Badge variant="outline">GCP</Badge> Essential Google Cloud Infrastructure (Coursera)</li>
            <li><Badge variant="outline">Product Management</Badge> Advanced Product Management: Vision, Strategy & Metrics (Udemy)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Rakuten, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Product Manager | Analytics Data Engineering Department | June 2023 – Present</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Campaign Evaluation Web Application for Offline Business</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Led the product lifecycle from concept to implementation, including planning, feature design, and QA control.</li>
                  <li>Utilized extensive datasets including offline purchase histories, user behavior, and demographic information.</li>
                  <li>Successfully adopted by over 20 retail partners, enhancing their marketing campaigns.</li>
                </ul>
              </li>
              <li>
                <strong>PoC for Voice of Customer Analysis</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Developed a PoC leveraging Large Language Models for VoC analysis, including topic labeling, sentiment rating, semantic clustering, and summarization.</li>
                  <li>Provided straightforward visualization for large text-based data.</li>
                </ul>
              </li>
              <li>
                <strong>PoC for Customized Target Prospecting Model</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Organized a PoC on Customized Target Prospecting model for internal services cross-use.</li>
                  <li>Achieved a 50% increase in conversion rate (CVR).</li>
                </ul>
              </li>
              <li>
                <strong>Ad-hoc Data-Driven Analysis to Support Marketing Campaigns</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Conducted in-depth analysis of offline purchase data to identify market positions and predict potential customer segments, leading to potential GMV increases.</li>
                  <li>Created storytelling-based reports and data visualizations to effectively communicate insights and proposals to clients.</li>
                </ul>
              </li>
            </ul>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-xl font-semibold">Accenture, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Senior Analyst | April 2019 - January 2022</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Data Migration for Telecommunication Company's Logistics Systems</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Led a team of 4 in conducting data migration from tool development to ETL procedure execution.</li>
                  <li>Managed knowledge transfer and meetings as the sole English-speaking team leader.</li>
                  <li>Ensured on-time completion through effective task distribution, troubleshooting, and team support.</li>
                  <li>Implemented data validation tools to minimize migration errors.</li>
                </ul>
              </li>
              <li>
                <strong>Fully Digital Banking System Development</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Defined functional design and business rules for the account management system.</li>
                  <li>Led development of complex functions: account opening, transactions, and transaction rule registration.</li>
                  <li>Project awarded the "Red Dot Design Award 2021".</li>
                </ul>
              </li>
              <li>
                <strong>Offline Digital Payments Platform for Crew Members</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Created templates for API design documents, reducing development team misinterpretation.</li>
                  <li>Designed APIs for user, corporate management, and transaction systems.</li>
                  <li>Conducted functional design for transaction system APIs connecting to Citi Bank.</li>
                </ul>
              </li>
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold">A.R Advanced Technology, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Application Engineer | April 2017 - April 2019</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Alcohol Detector Windows Application</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Developed database-related APIs from functional design to testing.</li>
                </ul>
              </li>
              <li>
                <strong>ETL Tool for Japanese Public Transportation Company</strong>
                <ul className="list-circle pl-6 mt-1">
                  <li>Led a team of 6 in DWH-ETL processing development, managing progress, task distribution, programming, testing, and debugging.</li>
                  <li>Successfully recovered a significantly delayed project through optimized task management and team motivation.</li>
                </ul>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resume;