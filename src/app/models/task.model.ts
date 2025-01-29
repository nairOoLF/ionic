export interface Task {
    id: number;
    title: string;
    description?: string;
    dueDate: string;  // Format ISO (ex: "2024-02-10T12:00:00Z")
    priority: 'low' | 'medium' | 'high';
    assignedTo?: string;
    completed: boolean;
  }
  