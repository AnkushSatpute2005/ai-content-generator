const toolsData = [
    {
      name: "Blog Title",
      desc: "An AI tool that generate blog title depends on your blog information",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
      aiPrompt:
        "Give me 5 blog topic idea in bullet wise only based on give title & outline and give me result in Rich and proper formated ",
      slug: "generate-blog-title",
      form: [
        {
          label: "Enter your blog title",
          field: "input",
          name: "title",
          required: true,
        },
        {
          label: "Enter blog outline",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Blog Content",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "blog",
      icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
      slug: "blog-content-generation",
      aiPrompt:
        "Generate Blog Content based on topic and outline in rich and proper formated",
      form: [
        {
          label: "Enter your blog topic",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter blog Outline here",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Blog Topic Ideas",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "Blog",
      icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
      slug: "blog-topic-idea",
      aiPrompt:
        "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on title in rich and proper formated ",
      form: [
        {
          label: "Enter your Niche",
          field: "input",
          name: "title",
          required: true,
        },
      ],
    },
    {
      name: "Youtube SEO Title",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "Youtube Tools",
      icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
      slug: "youtube-seo-title",
      aiPrompt:
        "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in proper format",
      form: [
        {
          label: "Enter your youtube video topic keyowords",
          field: "input",
          name: "keywords",
          required: true,
        },
        {
          label: "Enter youtube description Outline here",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Youtube Description",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "Youtube Tool",
      icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
      slug: "youtube-description",
      aiPrompt:
        "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich and proper formated",
      form: [
        {
          label: "Enter your blog topic/title",
          field: "input",
          name: "topic",
          required: true,
        },
        {
          label: "Enter youtube Outline here",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    {
      name: "Youtube Tags",
      desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
      category: "Youtube Tool",
      icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
      slug: "youtube-tag",
      aiPrompt:
        "Generate 10 Youtube tags in bullet point based on title and outline in rich and proper formated",
      form: [
        {
          label: "Enter your youtube title",
          field: "input",
          name: "title",
          required: true,
        },
        {
          label: "Enter youtube video Outline here (Optional)",
          field: "textarea",
          name: "outline",
        },
      ],
    },
    // Add the remaining tools following the same pattern
  ];
  
  export default toolsData;
  