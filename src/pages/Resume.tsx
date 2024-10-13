import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

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
          <p>As a dedicated Product Manager, I focus on delivering Business Intelligence and campaign analysis applications, drawing on my background in data science. My career includes experience as a data scientist, where I worked on solutions involving purchase, demographic, and geo data. Before that, I spent 3 years as an IT consultant and 2 years as an application engineer, gaining experience in architecture design and business analysis within banking and payment systems. I value strong communication, have a passion for data analysis, and hold a solid academic background in economic analysis and reporting.</p>
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
            <li><strong>Other Tools:</strong> <Badge variant="secondary">GCP</Badge> <Badge variant="secondary">Git</Badge> <Badge variant="secondary">AWS</Badge></li>
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
            <li>Machine Learning: Stanford | Online Machine Learning (Coursera)</li>
            <li>GCP: Essential Google Cloud Infrastructure (Coursera)</li>
            <li>Product Management: Advanced Product Management: Vision, Strategy & Metrics (Udemy)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Working Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Rakuten, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Product Manager | June 2023 – Present</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Project:</strong> Campaign Evaluation Web Application for Offline Business
                <ul className="list-circle pl-6 mt-1">
                  <li>Led the product from concept development through planning, feature design, implementation support, and QA control.</li>
                  <li>Developed the application utilizing extensive datasets, including offline purchase histories, user behavior, and demographic information.</li>
                  <li>The application was successfully adopted by over 20 retail partners to enhance their marketing campaigns.</li>
                </ul>
              </li>
              {/* Add other projects here */}
            </ul>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-xl font-semibold">Accenture, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Senior Analyst | April 2019 - January 2022</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Project:</strong> Migrate Data to New Logistic Systems for a Telecommunication Company
                <ul className="list-circle pl-6 mt-1">
                  <li>Led a team of 4 to conduct data migration from tool development to execution of the entire ETL procedure.</li>
                  <li>Conducted all knowledge transfer to new members and organized all meetings as the only English-speaking team leader.</li>
                  <li>Managed task distribution, troubleshooting, and team support, completing the migration with no delays.</li>
                  <li>Introduced and designed data validation tools to prevent errors during the migration process.</li>
                </ul>
              </li>
              {/* Add other projects here */}
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold">A.R Advanced Technology, Tokyo, Japan</h3>
            <p className="text-muted-foreground">Application Engineer | April 2017 - April 2019</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Project:</strong> Developed and Maintained an Alcohol Detector Windows Application
                <ul className="list-circle pl-6 mt-1">
                  <li>Developed database-related APIs from functional design, UI design, API-specific design, programming, test design, and testing.</li>
                </ul>
              </li>
              {/* Add other projects here */}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Resume;