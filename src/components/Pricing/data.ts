export type PricingItemType = {
  heading: string;
  subtext: string;
  advantages: string[];
  limitations: string[];
  price: {
    usd?: number;
    aed?: number;
  };
  sub?: {
    heading: string,
    text: string,
  }
};

const pricingItems: PricingItemType[] = [
  {
    heading: "Try It!",
    subtext: "One-time scan, for those who just want to try it out",
    advantages: [
      "All our modules are used to perform a scan.",
      "Vulnerability database check is performed, and a report is generated.",
      "No event notifications about found vulnerabilities are sent afterwards.",
    ],
    limitations: [
      "No more than 100 external IP addresses.",
      "No more than 30 subdomains.",
    ],
    price: {
      usd: 200,
      aed: 730,
    },
  },
  {
    heading: "Starter",
    subtext: "For startups,\n weekly check",
    advantages: [
      "All features of the TryIt! plan.",
      "Regular check for new CVE vulnerabilities based on the last scan results, which we monitor.",
      "Comparison of previous and current scans, showing the difference.",
      "Scanning is done automatically once a week. You can choose the day of scanning."
    ],
    limitations: [
      "No more than 100 external IP addresses.",
      "No more than 30 subdomains.",
    ],
    price: {
      usd: 500,
      aed: 1825,
    },
  },
  {
    heading: "Business",
    subtext: "For businesses interested in ongoing checks",
    advantages: [
      "All features of the Starter plan.",
      "Scanning is done 3 times a week. You can choose the days and times of scanning, or it will be done automatically on Sunday, Tuesday, Thursday.",
      "Option to choose classes and subclasses for scanning.",
      "Email support and 1 hour of phone support per month.",
    ],
    limitations: [
      "No more than 1000 external assets.",
      "No more than 200 subdomains.",
      "Option to add up to 3 domains for one organization.",
    ],
    price: {
      usd: 200,
      aed: 730,
    },
  },
  {
    heading: "Enterprise",
    subtext: `If you have\na pentagon`,
    advantages: [
      "All features of the Business plan.",
      "Dedicated manager for one hour of phone support per week, as well as priority email support with your manager.",
      "Scanning twice a week.",
      "Option to choose classes and subclasses, as well as create custom subclasses (for additional fees) for custom client tasks.",
      "Manual search for leaks."
    ],
    limitations: [
      "Includes 10,000 external assets.",
      "Each additional 1000 assets are paid separately ($8000 per year, 29200 AED).",
      "Number of domains upon request",
    ],
    price: {
      usd: 500,
      aed: 1825,
    },
    sub: {
      heading: "Paid annually",
      text: "The plan is only available upon request, without automatic card subscription.",
    },
  }
];

export default pricingItems;
