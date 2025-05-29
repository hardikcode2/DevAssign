const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve the login redirect issue in auth flow.",
        taskDate: "2025-05-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare weekly report",
        taskDescription: "Compile and submit the team’s weekly progress report.",
        taskDate: "2025-05-24",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Design onboarding screen",
        taskDescription: "Create mockups for the new user onboarding flow.",
        taskDate: "2025-05-20",
        category: "Design"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    firstName: "Neha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement dark mode",
        taskDescription: "Add dark mode support using Tailwind CSS.",
        taskDate: "2025-05-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit testing",
        taskDescription: "Write unit tests for the Profile component.",
        taskDate: "2025-05-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix broken links",
        taskDescription: "Update outdated links across the help center.",
        taskDate: "2025-05-22",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize images",
        taskDescription: "Reduce size of all homepage images without quality loss.",
        taskDate: "2025-05-27",
        category: "Optimization"
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop user profile endpoints using Express.",
        taskDate: "2025-05-24",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client feedback analysis",
        taskDescription: "Analyze user feedback for Q2 rollout.",
        taskDate: "2025-05-23",
        category: "Analysis"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix dropdown bug",
        taskDescription: "Dropdown menu fails to appear on mobile.",
        taskDate: "2025-05-27",
        category: "Frontend"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Research competitors",
        taskDescription: "Study the top 5 industry competitors’ landing pages.",
        taskDate: "2025-05-27",
        category: "Research"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create content plan",
        taskDescription: "Plan blog topics for June based on SEO data.",
        taskDate: "2025-05-27",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Edit product video",
        taskDescription: "Trim and update the voiceover for the product demo.",
        taskDate: "2025-05-25",
        category: "Media"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Setup CI/CD",
        taskDescription: "Integrate GitHub Actions for automatic deployment.",
        taskDate: "2025-05-23",
        category: "DevOps"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 3,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Add usage examples and troubleshooting tips.",
        taskDate: "2025-05-27",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor dashboard",
        taskDescription: "Clean up unused components and props.",
        taskDate: "2025-05-24",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix payment API error",
        taskDescription: "Resolve 'invalid_token' issue in Stripe integration.",
        taskDate: "2025-05-22",
        category: "Payment"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Localize UI",
        taskDescription: "Support Spanish and German languages in the UI.",
        taskDate: "2025-05-27",
        category: "Localization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update user roles",
        taskDescription: "Add new permission levels for project admins.",
        taskDate: "2025-05-23",
        category: "Admin"
      }
    ],
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
}
