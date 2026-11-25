export type Quote = {
  id: number
  content: string
  author: string
  category: string
}

export const quotes: Quote[] = [
  {
    id: 1,
    content: "HTML defines the structure and meaning of web content.",
    author: "MDN Web Docs",
    category: "Web Development",
  },
  {
    id: 2,
    content: "CSS describes how HTML documents should look.",
    author: "W3C",
    category: "Web Development",
  },
  {
    id: 3,
    content: "JavaScript is the programming language of the web.",
    author: "MDN Web Docs",
    category: "JavaScript",
  },
  {
    id: 4,
    content: "HTTP follows a client-server request and response model.",
    author: "MDN Web Docs",
    category: "Networking",
  },
  {
    id: 5,
    content: "DNS translates domain names into IP addresses.",
    author: "MDN Web Docs",
    category: "Networking",
  },
  {
    id: 6,
    content: "A browser builds a DOM tree from an HTML document.",
    author: "W3C",
    category: "Web Development",
  },
  {
    id: 7,
    content: "TCP provides reliable and ordered data delivery.",
    author: "IETF",
    category: "Networking",
  },
  {
    id: 8,
    content: "Git records changes to files over time.",
    author: "Git Documentation",
    category: "Developer Tools",
  },
  {
    id: 9,
    content: "A stack follows the Last In, First Out principle.",
    author: "Donald Knuth",
    category: "Data Structures",
  },
  {
    id: 10,
    content: "A queue follows the First In, First Out principle.",
    author: "Donald Knuth",
    category: "Data Structures",
  },
  {
    id: 11,
    content:
      "Binary search works on sorted data by repeatedly dividing the search space in half.",
    author: "Donald Knuth",
    category: "Algorithms",
  },
  {
    id: 12,
    content:
      "Big O notation describes how an algorithm scales as its input grows.",
    author: "Donald Knuth",
    category: "Algorithms",
  },
  {
    id: 13,
    content: "A hash table stores key-value pairs using a hash function.",
    author: "Donald Knuth",
    category: "Data Structures",
  },
  {
    id: 14,
    content: "Recursion occurs when a function calls itself.",
    author: "Niklaus Wirth",
    category: "Programming",
  },
  {
    id: 15,
    content:
      "A compiler translates source code into another executable or intermediate form.",
    author: "Grace Hopper",
    category: "Programming",
  },
  {
    id: 16,
    content: "SQL is used to query and manage relational databases.",
    author: "ISO",
    category: "Database",
  },
  {
    id: 17,
    content:
      "Database indexes help retrieve records without scanning every row.",
    author: "Database Systems",
    category: "Database",
  },
  {
    id: 18,
    content: "A primary key uniquely identifies a row in a database table.",
    author: "Edgar F. Codd",
    category: "Database",
  },
  {
    id: 19,
    content: "Database normalization helps reduce redundant data.",
    author: "Edgar F. Codd",
    category: "Database",
  },
  {
    id: 20,
    content:
      "REST is an architectural style for distributed hypermedia systems.",
    author: "Roy Fielding",
    category: "Backend Development",
  },
  {
    id: 21,
    content: "An API defines how different software components communicate.",
    author: "MDN Web Docs",
    category: "Backend Development",
  },
  {
    id: 22,
    content: "A cache stores frequently accessed data for faster retrieval.",
    author: "MDN Web Docs",
    category: "Performance",
  },
  {
    id: 23,
    content:
      "HTTPS uses TLS to protect data exchanged between clients and servers.",
    author: "IETF",
    category: "Cybersecurity",
  },
  {
    id: 24,
    content:
      "Authentication verifies identity, while authorization controls access.",
    author: "OWASP",
    category: "Cybersecurity",
  },
  {
    id: 25,
    content:
      "Password hashing helps protect stored passwords from being exposed in plain text.",
    author: "OWASP",
    category: "Cybersecurity",
  },
  {
    id: 26,
    content: "A firewall filters network traffic according to security rules.",
    author: "NIST",
    category: "Cybersecurity",
  },
  {
    id: 27,
    content:
      "A CDN delivers content through geographically distributed servers.",
    author: "Cloudflare",
    category: "Networking",
  },
  {
    id: 28,
    content:
      "Load balancing distributes incoming requests across multiple servers.",
    author: "NIST",
    category: "System Design",
  },
  {
    id: 29,
    content:
      "A distributed system consists of multiple computers working together.",
    author: "Leslie Lamport",
    category: "System Design",
  },
  {
    id: 30,
    content:
      "Microservices organize an application into independently deployable services.",
    author: "Martin Fowler",
    category: "System Design",
  },
  {
    id: 31,
    content: "Machine learning allows computers to learn patterns from data.",
    author: "Arthur Samuel",
    category: "Artificial Intelligence",
  },
  {
    id: 32,
    content: "Deep learning uses neural networks with multiple layers.",
    author: "Geoffrey Hinton",
    category: "Artificial Intelligence",
  },
  {
    id: 33,
    content:
      "Overfitting happens when a model performs well on training data but poorly on unseen data.",
    author: "Vladimir Vapnik",
    category: "Machine Learning",
  },
  {
    id: 34,
    content:
      "Reinforcement learning uses rewards to guide an agent's behavior.",
    author: "Richard Sutton",
    category: "Machine Learning",
  },
  {
    id: 35,
    content:
      "A neural network learns by adjusting its weights during training.",
    author: "Geoffrey Hinton",
    category: "Machine Learning",
  },
  {
    id: 36,
    content:
      "Open-source software makes its source code available for inspection and modification.",
    author: "Open Source Initiative",
    category: "Technology",
  },
  {
    id: 37,
    content: "Linux is an open-source operating system kernel.",
    author: "Linus Torvalds",
    category: "Operating Systems",
  },
  {
    id: 38,
    content:
      "Containers package applications with the dependencies needed to run them.",
    author: "Docker Documentation",
    category: "DevOps",
  },
  {
    id: 39,
    content:
      "Cloud computing provides on-demand access to computing resources.",
    author: "NIST",
    category: "Cloud Computing",
  },
  {
    id: 40,
    content:
      "Accessibility helps make websites usable by people with different abilities.",
    author: "W3C",
    category: "Web Development",
  },
]
