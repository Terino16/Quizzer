import { Question } from "@/typings";
export const questions: Question[] = [
  {
    id: 1,
    question:
      "Which service enables customers to audit API calls in their AWS accounts?",
    option: [
      "A. AWS CloudTrail",
      " B. AWS Trusted Advisor",
      "C. Amazon Inspector",
      " D. AWS X-Ray",
    ],
    answer: [0],
  },
  {
    id: 2,
    question: "Which AWS service can be used at no additional cost?",
    option: [
      "Amazon SageMaker",
      "AWS Config",
      "AWS Organizations",
      "Amazon CloudWatch",
    ],
    answer: [2],
  },
  {
    id: 3,
    question:
      "What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?",
    option: [
      "Managing the code within the Lambda function",
      "Confirming that the hardware is working in the data center",
      "Patching the operating system",
      "Shutting down Lambda functions when they are no longer in use",
    ],
    answer: [0],
  },
  {
    id: 4,
    question:
      "A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?",
    option: [
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon Kinesis",
      "Amazon RDS",
    ],
    answer: [1],
  },
  {
    id: 5,
    question:
      "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost-effective manner?",
    option: [
      "Deliver the content through Amazon CloudFront.",
      "Store the content on Amazon S3 and enable S3 cross-region replication.",
      "Implement a VPN across multiple AWS Regions.",
      "Deliver the content through AWS PrivateLink.",
    ],
    answer: [0],
  },
  {
    id: 6,
    question:
      "Which option is a benefit of the economies of scale based on the advantages of cloud computing?",
    option: [
      "The ability to trade variable expense for fixed expense",
      "Increased speed and agility",
      "Lower variable costs over fixed costs",
      "Increased operational costs across data centers",
    ],
    answer: [2],
  },
  {
    id: 7,
    question:
      "A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?",
    option: [
      "Amazon FSx",
      "Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon EMR",
    ],
    answer: [0],
  },
  {
    id: 8,
    question:
      "Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?",
    option: [
      "AWS CLI",
      "AWS Developer Center",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS CodeStar",
    ],
    answer: [2],
  },
  {
    id: 9,
    question:
      "A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited-privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?",
    option: [
      "Amazon API Gateway",
      "IAM users",
      "AWS Security Token Service (AWS STS)",
      "IAM instance profiles",
    ],
    answer: [2],
  },
  {
    id: 10,
    question:
      "A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?",
    option: [
      "Tape Gateway",
      "Volume Gateway",
      "Amazon FSx File Gateway",
      "Amazon S3 File Gateway",
    ],
    answer: [2],
  },
  {
    id: 11,
    question:
      "Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?",
    option: [
      "AWS Security Hub",
      "AWS Trusted Advisor",
      "Amazon EventBridge",
      "Amazon GuardDuty",
    ],
    answer: [0],
  },
  {
    id: 12,
    question: "Which AWS service is always provided at no charge?",
    option: [
      "Amazon S3",
      "AWS Identity and Access Management (IAM)",
      "Elastic Load Balancers",
      "AWS WAF",
    ],
    answer: [1],
  },
  {
    id: 12,
    question:
      "To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?",
    option: [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
    ],
    answer: [2],
  },
  {
    id: 13,
    question:
      "A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?",
    option: [
      "Patch the operating system.",
      "Provision hosts.",
      "Manage database access permissions.",
      "Secure the operating system.",
    ],
    answer: [2],
  },
  {
    id: 14,
    question:
      "A company has a test AWS environment. A company is planning on testing an application within AWS. The application testing can be interrupted and does not need to run continuously. Which Amazon EC2 purchasing option will meet these requirements MOST cost-effectively?",
    option: [
      "On-Demand Instances",
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    answer: [2],
  },
  {
    id: 15,
    question:
      "Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?",
    option: [
      "Amazon Macie",
      "Amazon Detective",
      "Amazon GuardDuty",
      "AWS IAM Access Analyzer",
    ],
    answer: [0],
  },
  {
    id: 16,
    question:
      "Which of the following services can be used to block network traffic to an instance? (Choose two.)",
    option: [
      "Security groups",
      "Amazon Virtual Private Cloud (Amazon VPC) flow logs",
      "Network ACLs",
      "Amazon CloudWatch",
      "AWS CloudTrail",
    ],
    answer: [0, 2],
  },
  {
    id: 17,
    question:
      "Which AWS service can identify when an Amazon EC2 instance was terminated?",
    option: [
      "AWS Identity and Access Management (IAM)",
      "AWS CloudTrail",
      "AWS Compute Optimizer",
      "Amazon EventBridge",
    ],
    answer: [1],
  },
  {
    id: 18,
    question:
      "Which of the following is a fully managed MySQL-compatible database?",
    option: [
      "Amazon S3",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    answer: [3],
  },
  {
    id: 19,
    question:
      "Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?",
    option: [
      "AWS Snowmobile",
      "AWS Local Zones",
      "AWS Outposts",
      "AWS Fargate",
    ],
    answer: [2],
  },
  {
    id: 20,
    question:
      "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
    option: ["Amazon DynamoDB", "Amazon Athena", "Amazon RDS", "Amazon EMR"],
    answer: [2],
  },
  {
    id: 21,
    question:
      "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)",
    option: [
      "Amazon Connect",
      "Amazon AppStream 2.0",
      "Amazon WorkSpaces",
      "AWS Site-to-Site VPN",
      "Amazon Elastic Container Service (Amazon ECS)",
    ],
    answer: [1, 2],
  },
  {
    id: 22,
    question:
      "A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?",
    option: [
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon GuardDuty",
      "AWS Health Dashboard",
    ],
    answer: [0],
  },
  {
    id: 23,
    question:
      "Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?",
    option: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon DocumentDB (with MongoDB compatibility)",
      "Amazon Neptune",
    ],
    answer: [0],
  },
  {
    id: 24,
    question:
      "A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?",
    option: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Instances",
    ],
    answer: [0],
  },
  {
    id: 25,
    question:
      "Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)",
    option: [
      "EC2 Reserved Instances",
      "EC2 Amazon Machine Images (AMIs)",
      "Amazon Elastic Block Store (Amazon EBS) snapshots",
      "AWS Shield",
      "Amazon GuardDuty",
    ],
    answer: [1, 2],
  },
  {
    id: 26,
    question:
      "Which AWS service provides command line access to AWS tools and resources directly from a web browser?",
    option: [
      "AWS CloudHSM",
      "AWS CloudShell",
      "Amazon WorkSpaces",
      "AWS Cloud Map",
    ],
    answer: [1],
  },
  {
    id: 27,
    question:
      "A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?",
    option: [
      "VPC endpoints",
      "AWS Transit Gateway",
      "Amazon Route 53",
      "AWS Secrets Manager",
    ],
    answer: [1],
  },
  {
    id: 28,
    question:
      "A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?",
    option: [
      "AWS Business Support",
      "AWS Basic Support",
      "AWS Developer Support",
      "AWS Enterprise Support",
    ],
    answer: [3],
  },
  {
    id: 29,
    question:
      "A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?",
    option: [
      "AWS Systems Manager",
      "AWS Secrets Manager",
      "AWS License Manager",
      "AWS Managed Services",
    ],
    answer: [1],
  },
  {
    id: 30,
    question:
      "Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?",
    option: [
      "Amazon Route 53",
      "Amazon Macie",
      "AWS Direct Connect",
      "AWS PrivateLink",
    ],
    answer: [3],
  },
  {
    id: 31,
    question: "Which AWS service is used to provide encryption for Amazon EBS?",
    option: [
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS KMS",
      "AWS Config",
    ],
    answer: [2],
  },
  {
    id: 32,
    question:
      "A company wants to manage its AWS Cloud resources through a web interface. Which AWS service will meet this requirement?",
    option: ["AWS Management Console", "AWS CLI", "AWS SDK", "AWS Cloud9"],
    answer: [0],
  },
  {
    id: 33,
    question:
      "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    option: [
      "Trade variable expenses for capital expenses",
      "High economies of scale",
      "Launch globally in minutes",
      "Focus on managing hardware infrastructure",
      "Overprovision to ensure capacity",
    ],
    answer: [1, 2],
  },
  {
    id: 34,
    question:
      "Which AWS Cloud benefit is shown by an architecture’s ability to withstand failures with minimal downtime?",
    option: ["Agility", "Elasticity", "Scalability", "High availability"],
    answer: [2],
  },
  {
    id: 35,
    question:
      "A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?",
    option: [
      "AWS Ground Station",
      "AWS Shield",
      "AWS IoT Device Defender",
      "AWS CloudFormation",
    ],
    answer: [3],
  },
  {
    id: 36,
    question:
      "Which task is the customer’s responsibility, according to the AWS shared responsibility model?",
    option: [
      "Maintain the security of the AWS Cloud.",
      "Configure firewalls and networks.",
      "Patch the operating system of Amazon RDS instances.",
      "Implement physical and environmental controls.",
    ],
    answer: [1],
  },
  {
    id: 37,
    question:
      "Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?",
    option: [
      "AWS WAF",
      "AWS Global Accelerator",
      "AWS Shield",
      "AWS Direct Connect",
    ],
    answer: [1],
  },
  {
    id: 38,
    question:
      "A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?",
    option: [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Kinesis Data Streams",
    ],
    answer: [2],
  },
  {
    id: 39,
    question:
      "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
    option: [
      "Volume discounts",
      "A minimal additional fee for use",
      "One bill for multiple accounts",
      "Installment payment option",
      "Custom cost and usage budget creation",
    ],
    answer: [0, 2],
  },
  {
    id: 40,
    question:
      "A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?",
    option: [
      "S3 Multi-Region Access Points",
      "S3 Storage Lens",
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "Access Analyzer for S3",
    ],
    answer: [3],
  },
  {
    id: 41,
    question:
      "What is the best resource for a user to find compliance-related information and reports about AWS?",
    option: [
      "AWS Artifact",
      "AWS Marketplace",
      "Amazon Inspector",
      "AWS Support",
    ],
    answer: [0],
  },
  {
    id: 42,
    question:
      "Which AWS service enables companies to deploy an application close to end users?",
    option: [
      "Amazon CloudFront",
      "AWS Auto Scaling",
      "AWS AppSync",
      "Amazon Route 53",
    ],
    answer: [0],
  },
  {
    id: 43,
    question:
      "Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?",
    option: [
      "Route table",
      "AWS Transit Gateway",
      "AWS Global Accelerator",
      "Amazon VPC",
    ],
    answer: [2],
  },
  {
    id: 44,
    question: "Which AWS service provides highly durable object storage?",
    option: [
      "Amazon S3",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon FSx",
    ],
    answer: [0],
  },
  {
    id: 45,
    question:
      "Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?",
    option: [
      "Database backups",
      "Database software patches",
      "Operating system patches",
      "Operating system installations",
    ],
    answer: [3],
  },
  {
    id: 46,
    question:
      "Which of the following are advantages of moving to the AWS Cloud? (Choose two.)",
    option: [
      "The ability to turn over the responsibility for all security to AWS.",
      "The ability to use the pay-as-you-go model.",
      "The ability to have full control over the physical infrastructure.",
      "No longer having to guess what capacity will be required.",
      "No longer worrying about users access controls.",
    ],
    answer: [1, 3],
  },
  {
    id: 47,
    question:
      "Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?",
    option: [
      "AWS DataSync",
      "Amazon S3 Glacier",
      "AWS Storage Gateway",
      "Amazon Elastic Block Store (Amazon EBS)",
    ],
    answer: [2],
  },
  {
    id: 48,
    question:
      "A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?",
    option: [
      "AWS Pricing Calculator",
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "AWS Budgets",
    ],
    answer: [0],
  },
  {
    id: 49,
    question:
      "Which tool should a developer use to integrate AWS service features directly into an application?",
    option: [
      "AWS Software Development Kit",
      "AWS CodeDeploy",
      "AWS Lambda",
      "AWS Batch",
    ],
    answer: [0],
  },
  {
    id: 50,
    question:
      "Which of the following is a recommended design principle of the AWS Well-Architected Framework?",
    option: [
      "Reduce downtime by making infrastructure changes infrequently and in large increments.",
      "Invest the time to configure infrastructure manually.",
      "Learn to improve from operational failures.",
      "Use monolithic application design for centralization.",
    ],
    answer: [2],
  },
  {
    id: 51,
    question:
      "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    option: [
      "Restricted access.",
      "As-needed access.",
      "Least privilege access.",
      "Token access.",
    ],
    answer: [2],
  },
  {
    id: 52,
    question:
      "Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?",
    option: [
      "Security group",
      "AWS WAF",
      "AWS Firewall Manager",
      "Network ACL",
    ],
    answer: [3],
  },
  {
    id: 53,
    question:
      "A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?",
    option: [
      "Amazon Aurora",
      "Amazon Redshift Serverless",
      "AWS Lambda",
      "Amazon RDS",
    ],
    answer: [1],
  },
  {
    id: 54,
    question:
      "How does AWS Cloud computing help businesses reduce costs? (Choose two.)",
    option: [
      "AWS charges the same prices for services in every AWS Region.",
      "AWS enables capacity to be adjusted on demand.",
      "AWS offers discounts for Amazon EC2 instances that remain idle for more than 1 week.",
      "AWS does not charge for data sent from the AWS Cloud to the internet.",
      "AWS eliminates many of the costs of building and maintaining on-premises data centers.",
    ],
    answer: [1, 4],
  },
  {
    id: 55,
    question:
      "A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?",
    option: ["IAM group", "IAM role", "IAM tag", "IAM Access Analyzer"],
    answer: [1],
  },
  {
    id: 56,
    question:
      "Which task is the responsibility of AWS when using AWS services?",
    option: [
      "Management of IAM user permissions",
      "Creation of security group rules for outbound access",
      "Maintenance of physical and environmental controls",
      "Application of Amazon EC2 operating system patches",
    ],
    answer: [2],
  },
  {
    id: 57,
    question:
      "A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions. Which AWS service will meet these requirements?",
    option: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS CloudFormation",
    ],
    answer: [3],
  },
  {
    id: 58,
    question:
      "Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?",
    option: [
      "Data architecture",
      "Data protection",
      "Data governance",
      "Data science",
    ],
    answer: [2],
  },
  {
    id: 59,
    question:
      "A company is running a workload in the AWS Cloud. Which AWS best practice ensures the MOST cost-effective architecture for the workload?",
    option: ["Loose coupling", "Rightsizing", "Caching", "Redundancy"],
    answer: [1],
  },
  {
    id: 60,
    question:
      "A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?",
    option: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "AWS Storage Gateway",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda",
    ],
    answer: [1],
  },
  {
    id: 61,
    question:
      "Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?",
    option: [
      "Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "Reserved Instance reporting",
    ],
    answer: [0],
  },
  {
    id: 62,
    question:
      "Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)",
    option: [
      "Establish the global infrastructure.",
      "Perform client-side data encryption.",
      "Configure IAM credentials.",
      "Secure edge locations.",
      "Patch Amazon RDS DB instances.",
    ],
    answer: [1, 2],
  },
  {
    id: 63,
    question:
      "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
    option: [
      "Grant the developer access to only the AWS resources needed to perform the job.",
      "Share the AWS account root user credentials with the developer.",
      "Add the developer to the administrator’s group in AWS IAM.",
      "Configure a password policy that ensures the developer’s password cannot be changed.",
      "Ensure the account password policy requires a minimum length.",
    ],
    answer: [0, 4],
  },
  {
    id: 64,
    question:
      "A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?",
    option: [
      "Resource tagging",
      "Consolidated billing",
      "Pay-as-you-go pricing",
      "Spot Instances",
    ],
    answer: [2],
  },
  {
    id: 65,
    question:
      "A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?",
    option: [
      "Security groups",
      "AWS Firewall Manager",
      "IAM roles",
      "IAM user SSH keys",
    ],
    answer: [2],
  },
];
