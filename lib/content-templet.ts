import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconMail,
  IconHeadphones,
  IconFileCode,
  IconFileText,
  IconArticle,
  IconGrid3x3,
  IconFileDescription,
  IconCode,
  IconCertificate,
  IconSchool,
  IconBriefcase,
  IconUser
} from "@tabler/icons-react";

export const contentTemplates = [
  {
    name: "Youtube Video Description",
    desc: "Generate SEO-optimized YouTube video descriptions based on your video title and outline for better search rankings and engagement.",
    category: "Youtube",
    icon: IconBrandYoutube,
    aiPrompt:
      "Generate a YouTube video description with SEO-rich keywords based on the provided video title and outline. Provide the output in Rich Text Editor format.",
    slug: "youtube-description",
    form: [
      {
        label: "YouTube Video Title (for SEO)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Video Description Outline (SEO-optimized)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Idea",
    desc: "Discover trending YouTube video ideas tailored to your niche and outline to attract more views and grow your channel.",
    category: "Youtube",
    icon: IconBrandYoutube,
    aiPrompt:
      "Generate creative and trending YouTube video ideas based on the provided niche and outline, optimizing for engagement. Provide results in Rich Text Editor format.",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Enter Your Video Niche (e.g., Tech, Fashion, Gaming)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide a Brief Video Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Generate Youtube tags for your video based on the given information.",
    category: "Youtube",
    icon: IconBrandYoutube,
    aiPrompt:
      "Generate a list of Youtube tags with SEO-rich keywords based on the provided video title and  video description. Provide the output in Rich Text Editor format.",
    slug: "youtube-tags",
    form: [
      {
        label: "Enter Your Video Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter Video Description",
        field: "textarea",
        name: "description",
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Generate Instagram posts based on the provided information.",
    category: "Instagram",
    icon: IconBrandInstagram,
    aiPrompt:
      "Generate an Instagram post description based on the given niche and outline. Provide the output in Rich Text Editor format.",
    slug: "instagram-post-generator",
    form: [
      {
        label: "Enter Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "Generate popular Instagram hashtags tailored to your post niche for increased visibility and audience reach.",
    category: "Instagram",
    icon: IconBrandInstagram,
    aiPrompt:
      "Generate a list of popular Instagram hashtags based on the provided post niche and outline to boost visibility. Provide the output in Rich Text Editor format.",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter Your Post Niche (e.g., Travel, Fitness, Art)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe Your Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tiktok Hashtags",
    desc: "Get trending TikTok hashtags based on your niche to drive engagement and viral potential for your content.",
    category: "Tiktok",
    icon: IconBrandTiktok,
    aiPrompt:
      "Generate a list of trending TikTok hashtags based on the given niche and outline for better audience engagement. Provide results in Rich Text Editor format.",
    slug: "generate-tiktok-hashtags",
    form: [
      {
        label: "Enter Your Post Niche (e.g., Fashion, Comedy, Music)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe Your Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "LinkedIn Post",
    desc: "Create professional LinkedIn post ideas tailored to your industry niche for increased engagement and networking.",
    category: "Linkedin",
    icon: IconBrandLinkedin,
    aiPrompt:
      "Generate professional LinkedIn post ideas based on the provided niche and outline, with suggestions for networking and engagement. Provide results in Rich Text Editor format.",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Enter Your Industry Niche (e.g., Marketing, Tech, Finance)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide Post Outline or Topic",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tweet",
    desc: "Generate short, engaging tweets based on your niche and topic to boost your Twitter presence and followers.",
    category: "Twitter",
    icon: IconBrandTwitter,
    aiPrompt:
      "Generate a short, engaging tweet (280 characters max) based on the given niche and outline. Provide results in Rich Text Editor format.",
    slug: "generate-tweet-post",
    form: [
      {
        label: "Enter Your Tweet Niche (e.g., Tech, Business, Sports)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide Tweet Outline or Topic",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Facebook Post",
    desc: "Create engaging Facebook post ideas tailored to your audience and niche to maximize engagement and shares.",
    category: "Facebook",
    icon: IconBrandFacebook,
    aiPrompt:
      "Generate a Facebook post idea based on the provided niche and outline, optimized for engagement. Provide the output in Rich Text Editor format.",
    slug: "generate-facebook-post",
    form: [
      {
        label: "Enter Your Post Niche (e.g., Lifestyle, Health, Fitness)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe Your Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Email Newsletter",
    desc: "Generate captivating email newsletter ideas based on your niche to keep your audience engaged and informed.",
    category: "Email",
    icon: IconMail,
    aiPrompt:
      "Generate email newsletter ideas based on the provided niche and outline, with a focus on audience engagement. Provide the output in Rich Text Editor format.",
    slug: "generate-email-newsletter",
    form: [
      {
        label: "Enter Your Newsletter Niche (e.g., Business, Tech, Lifestyle)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide Newsletter Outline or Focus",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Podcast Episode Idea",
    desc: "Get unique podcast episode ideas based on your niche and outline to create engaging content for your listeners.",
    category: "Podcast",
    icon: IconHeadphones,
    aiPrompt:
      "Generate creative podcast episode ideas based on the provided niche and outline. Provide results in Rich Text Editor format.",
    slug: "generate-podcast-episode-idea",
    form: [
      {
        label: "Enter Your Podcast Niche (e.g., True Crime, Business, Comedy)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide Episode Outline or Topic",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Post",
    desc: "Generate SEO-optimized blog post ideas to help drive traffic and rank higher on search engines.",
    category: "Blog ",
    icon: IconArticle,
    aiPrompt:
      "Generate a blog post idea with an SEO-friendly structure based on the provided niche and outline. Provide the output in Rich Text Editor format.",
    slug: "generate-blog-post",
    form: [
      {
        label: "Enter Blog Niche (e.g., Tech, Finance, Lifestyle)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Provide Blog Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: IconFileText,
    aiPrompt:
      "Generate a catchy blog title based on the given blog information. Provide the output in Rich Text Editor format.",
    slug: "blog-title",
    form: [
      {
        label: "Enter Your Blog Information",
        field: "textarea",
        name: "blogInfo",
        required: true,
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Generate blog topic ideas based on the provided niche or information.",
    category: "Blog",
    icon: IconFileText,
    aiPrompt:
      "Generate a list of blog topic ideas based on the given niche. Provide the output in Rich Text Editor format.",
    slug: "blog-topic-ideas",
    form: [
      {
        label: "Enter Your Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Rewrite existing articles or blog posts to bypass AI detectors and create unique content.",
    category: "Blog",
    icon: IconFileDescription,
    aiPrompt:
      "Rewrite the provided article or blog post to make it unique while bypassing AI detectors. Provide the output in Rich Text Editor format.",
    slug: "rewrite-article-plagiarism-free",
    form: [
      {
        label: "Enter Article or Blog Post Text",
        field: "textarea",
        name: "articleText",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Improve the quality of your text by refining language, style, and eliminating redundancies.",
    category: "Grammar",
    icon: IconFileText,
    aiPrompt:
      "Refine the provided text by improving grammar, language style, and eliminating redundancies. Provide the output in Rich Text Editor format.",
    slug: "text-improver",
    form: [
      {
        label: "Enter Text for Improvement",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Coding Advice",
    desc: "Get coding advice or code snippets based on your programming issue or challenge.",
    category: "Coding",
    icon: IconFileCode,
    aiPrompt:
      "Provide advice or solutions to the given coding problem, focusing on best practices and efficiency. Provide results in Rich Text Editor format.",
    slug: "generate-coding-advice",
    form: [
      {
        label: "Enter Programming Language (e.g., JavaScript, Python, C++)",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe Your Coding Problem",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Grammar Checker",
    desc: "Generate grammar suggestions and corrections based on your input text.",
    category: "Grammar",
    icon: IconFileText,
    aiPrompt:
      "Check the provided text for grammar and punctuation errors, and offer suggestions for improvements. Provide the results in Rich Text Editor format.",
    slug: "generate-grammar-check",
    form: [
      {
        label: "Enter Text to Check for Grammar",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Personal Information",
    desc: "Provide your contact details, including your name, email, phone, and location.",
    category: "Resume",
    icon: IconUser,
    aiPrompt:
      "Generate a resume header including the applicant's full name, email, phone number, and location.",
    slug: "personal-information",
    form: [
      {
        label: "Full Name",
        field: "input",
        name: "fullName",
        required: true,
      },
      {
        label: "Email Address",
        field: "input",
        name: "email",
        required: true,
      },
      {
        label: "Phone Number",
        field: "input",
        name: "phone",
        required: true,
      },
      {
        label: "Location",
        field: "input",
        name: "location",
      },
    ],
  },
  {
    name: "Professional Summary",
    desc: "Summarize your professional background in 3-4 sentences to highlight your key strengths.",
    category: "Resume",
    icon: IconFileText,
    aiPrompt:
      "Generate a professional summary based on the applicant's career highlights, key skills, and achievements. Provide the output in Rich Text Editor format.",
    slug: "professional-summary",
    form: [
      {
        label: "Summary",
        field: "textarea",
        name: "summary",
        required: true,
      },
    ],
  },
  {
    name: "Work Experience",
    desc: "Detail your work history, including job titles, companies, dates, and key achievements.",
    category: "Resume",
    icon: IconBriefcase,
    aiPrompt:
      "Generate work experience sections with job title, company name, dates, and key achievements. Provide the output in Rich Text Editor format.",
    slug: "work-experience",
    form: [
      {
        label: "Job Title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Company Name",
        field: "input",
        name: "company",
        required: true,
      },
      {
        label: "Location",
        field: "input",
        name: "location",
      },
      {
        label: "Duration (e.g., Month YYYY - Month YYYY)",
        field: "input",
        name: "duration",
        required: true,
      },
      {
        label: "Key Achievements (bullet points)",
        field: "textarea",
        name: "achievements",
      },
    ],
  },
  {
    name: "Education",
    desc: "List your academic background, including degrees, institutions, and dates attended.",
    category: "Resume",
    icon: IconSchool,
    aiPrompt:
      "Generate an education section with degrees, institutions, dates, and locations. Provide the output in Rich Text Editor format.",
    slug: "education",
    form: [
      {
        label: "Degree Title",
        field: "input",
        name: "degree",
        required: true,
      },
      {
        label: "Institution Name",
        field: "input",
        name: "institution",
        required: true,
      },
      {
        label: "Location",
        field: "input",
        name: "location",
      },
      {
        label: "Duration (e.g., Month YYYY - Month YYYY)",
        field: "input",
        name: "duration",
        required: true,
      },
    ],
  },
  {
    name: "Skills",
    desc: "Highlight your key technical and soft skills relevant to the job you're applying for.",
    category: "Resume",
    icon: IconCode,
    aiPrompt:
      "Generate a skills section that lists technical and soft skills relevant to the job. Provide the output in Rich Text Editor format.",
    slug: "skills",
    form: [
      {
        label: "Technical Skills (e.g., Programming Languages)",
        field: "textarea",
        name: "technicalSkills",
        required: true,
      },
      {
        label: "Soft Skills (e.g., Communication, Leadership)",
        field: "textarea",
        name: "softSkills",
        required: true,
      },
    ],
  },
  {
    name: "Certifications",
    desc: "List relevant certifications or licenses you've earned, including issuing organizations and dates.",
    category: "Resume",
    icon: IconCertificate,
    aiPrompt:
      "Generate a certification section including the title, issuing organization, and dates. Provide the output in Rich Text Editor format.",
    slug: "certifications",
    form: [
      {
        label: "Certification Title",
        field: "input",
        name: "certificationTitle",
        required: true,
      },
      {
        label: "Issuing Organization",
        field: "input",
        name: "issuingOrg",
        required: true,
      },
      {
        label: "Date of Issuance (e.g., Month YYYY)",
        field: "input",
        name: "issueDate",
        required: true,
      },
    ],
  },
  {
    name: "Projects",
    desc: "Showcase projects you've worked on, detailing your role and the technologies you used.",
    category: "Resume",
    icon: IconCode,
    aiPrompt:
      "Generate a project section that includes project titles, descriptions, and technologies used. Provide the output in Rich Text Editor format.",
    slug: "projects",
    form: [
      {
        label: "Project Title",
        field: "input",
        name: "projectTitle",
        required: true,
      },
      {
        label: "Project Description",
        field: "textarea",
        name: "projectDescription",
        required: true,
      },
      {
        label: "Technologies Used",
        field: "textarea",
        name: "technologies",
      },
    ],
  },
];
