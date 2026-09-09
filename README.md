# Student Information System

## Project Title
Student Information System — Collaborative Git Workflow Lab

## Team Members
| Name       | Register Number | Role                  |
|------------|------------------|-----------------------|
| Shambhavi    | 151            | Team Lead / Developer |
| Kanika  | 127                 | UI Developer          |
| Shalwin    | 150              | JavaScript Developer  |

## Project Description
A simple static web application that displays basic student information — Name, Register Number, and Programme — along with contact details. The purpose of this project is not the application itself, but to practice a real-world collaborative Git workflow: branching, committing, opening Pull Requests, reviewing changes, and resolving merge conflicts as a team.

## Technologies Used
- HTML5
- CSS3
- JavaScript (vanilla)
- Git & GitHub

## Git Branching Strategy
- `main` — protected, stable branch; only updated via reviewed Pull Requests
- `feature/ui` — UI/CSS improvements (card layout, spacing, headings, button styling)
- `feature/javascript` — "Show Details" click functionality
- `feature/contact` — added Contact Information section (Email, Phone)
- `feature/student-name` — updated the application heading
- `feature/app-title` — updated the application title (created in parallel with `feature/student-name`, leading to a merge conflict)

Each feature was developed on its own branch off an up-to-date `main`, committed with a descriptive message, pushed, and merged only after review via Pull Request.

## Pull Requests Created
1. `feature/ui` → `main` — Improve student information UI
2. `feature/javascript` → `main` — Add student details functionality
3. `feature/contact` → `main` — Add contact information
4. `feature/student-name` → `main` — Update application heading
5. `feature/app-title` → `main` — Update application title (conflict resolved before merge)

## Merge Conflict

**What caused it:**
`feature/student-name` and `feature/app-title` were both branched from the same commit on `main` and each modified the same line in `index.html` (the `<h1>` heading) differently:
- `feature/student-name` changed it to `Student Management System`
- `feature/app-title` changed it to `MCA Student Information Portal`

When `feature/student-name` was merged into `main` first, `feature/app-title` fell out of sync. Attempting to merge `feature/app-title` afterward produced a conflict on that same line.

**How it was resolved:**
1. Updated local `main` with `git pull origin main`.
2. Merged `main` into `feature/app-title` with `git merge main`, which surfaced the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in `index.html`.
3. Manually reviewed both versions and combined them into a single heading: `Student Management System – MCA`.
4. Removed all conflict markers, staged the resolved file (`git add index.html`), and committed the resolution.
5. Pushed the updated branch and merged the now-conflict-free Pull Request into `main`.

## How to Run the Application
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd student-info-app
   ```
2. Open `index.html` directly in any web browser (no server, backend, or build step required).
