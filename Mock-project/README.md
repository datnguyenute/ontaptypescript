1) Scope & mục tiêu

Tên app: Team Todo (multi-tenant nhẹ)
Mục tiêu: quản lý todo theo workspace/project, có role/permission, audit log, realtime/notification, API chuẩn, test + deploy.

2) Personas & quyền
Roles (RBAC)

Owner: toàn quyền trong workspace

Admin: quản lý user/role/project trong workspace

Member: CRUD task trong project mình có quyền

Viewer: chỉ xem

Permissions (fine-grained)

Workspace: workspace:manage, workspace:invite, workspace:view

Project: project:create, project:manage, project:view

Task: task:create, task:update, task:delete, task:view

Comment/Attachment: comment:create, attachment:upload, …

Senior angle: RBAC + permission matrix + guard + decorator @Permissions() trong Nest.

3) Tính năng chính (Functional requirements)
A. Authentication

Đăng ký/đăng nhập bằng email + password

Password hashing (argon2/bcrypt), policy tối thiểu

JWT access token + refresh token

Access token ngắn hạn (ex: 15m)

Refresh token dài hạn (ex: 7–30d), lưu hashed trong DB

Logout (revoke refresh token)

Forgot password + reset password (email link token)

Optional “Senior++”: OAuth Google (Passport strategy)

B. Authorization

Multi-workspace: user có thể thuộc nhiều workspace

Mỗi workspace có role khác nhau

Mỗi project có member list + role override (tuỳ chọn)

Endpoint phải enforce theo permission (Nest Guards)

C. Todo / Task management

Entities gợi ý:

Workspace

Project

Task

Tag/Label

Comment

Attachment (metadata)

Task fields:

title, description (markdown optional)

status: todo / in_progress / done / archived

priority: low/medium/high/urgent

dueDate, startDate

assignee (user)

tags

createdBy, updatedBy

Features:

CRUD task

Drag & drop kanban (FE)

Bulk actions (change status/assignee, delete multiple)

Search + filter + sort + pagination (server-side)

Soft delete + restore (nice for interview)

D. Collaboration

Comments theo task (CRUD)

Mention @user (optional)

Activity feed (audit log):

ai làm gì, lúc nào (create/update/status change/assign)

E. Notification / Realtime (optional nhưng rất “senior”)

Chọn 1 trong 2:

WebSocket (Nest Gateway): realtime update task/comments

Hoặc Server-Sent Events cho activity feed

In-app notifications: due soon, assigned to me, mentioned me

F. Admin & Security features

Invite user vào workspace bằng email (invite token)

Rate limit login endpoint

Account lock / backoff sau N lần fail

2FA TOTP (optional, cực ăn điểm)

Audit log truy cập admin actions

4) Non-functional requirements (điểm senior)
Security

Validate input bằng DTO + class-validator

Global pipes, exception filters

CORS config rõ ràng

CSRF strategy (nếu dùng cookie) hoặc token-based chuẩn

Refresh token rotate + detect reuse (bonus)

SQL injection safe (ORM), sanitize output

File upload:

validate mime/size

scan basic (optional)

signed URL (nếu dùng S3/GCS) hoặc local + limit

Performance & DB

PostgreSQL:

Index: (workspaceId, projectId, status), full-text search (optional)

Pagination: limit/offset hoặc cursor

Caching (optional): Redis cho session/ratelimit/cache list tasks

N+1 avoidance (join/select relation đúng)

Observability

Structured logging (pino/winston)

Request id, correlation id

Health check endpoint

Metrics (optional)

Quality

Unit test (service/guard)

E2E test (auth flow + CRUD)

API docs: Swagger/OpenAPI

Lint/format: eslint/prettier

Git hooks (optional)

CI/CD

Docker compose: api + db + (redis optional)

GitHub Actions:

test + build

migration check

Deploy option:

Backend: Render/Fly.io/GCP Cloud Run

FE: Vercel

5) API Requirements (BE)
REST endpoints (gợi ý)

Auth:

POST /auth/register

POST /auth/login

POST /auth/refresh

POST /auth/logout

POST /auth/forgot-password

POST /auth/reset-password

Workspaces:

GET /workspaces

POST /workspaces

GET /workspaces/:id

POST /workspaces/:id/invite

Projects:

GET /workspaces/:wid/projects

POST /workspaces/:wid/projects

Tasks:

GET /projects/:pid/tasks?status=&q=&assignee=&dueFrom=&dueTo=&sort=&page=

POST /projects/:pid/tasks

PATCH /tasks/:id

DELETE /tasks/:id (soft delete)

POST /tasks/bulk

Comments:

GET /tasks/:id/comments

POST /tasks/:id/comments

Data rules

Mọi record phải gắn workspaceId

User chỉ truy cập record thuộc workspace mình có quyền

Audit log được ghi tự động ở layer service/interceptor

6) Frontend Requirements (Next.js)

Auth pages: login/register/forgot/reset

App shell:

workspace switcher

project list

kanban + list view

State management:

React Query (recommended) + optimistic update

Protected routes (middleware)

Role-based UI: ẩn/disable action theo permission

Error handling + toast + empty/loading states

7) Deliverables (để đem đi phỏng vấn)

README: kiến trúc, trade-offs, cách chạy local

Swagger link + Postman collection (optional)

Migration + seed data

Demo account

Diagram:

DB ERD

Auth flow (access/refresh)

RBAC flow (guard -> permission resolver)