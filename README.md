# Project Management Form — Micro Project (COLLEGE-DB)

**Project Management Data Entry Form using HTML, JavaScript, jQuery, and JsonPowerDB.**
## Description

This project is a web-based Project Management Form built as part of a micro-project assignment.
It allows the user to save, update, and reset project records in the PROJECT-TABLE relation inside the COLLEGE-DB database using JsonPowerDB (JPDB).

The application follows the requirement rules:

• Uses Project-ID as the primary key

• Detects automatically whether a record already exists or not

• Enables/Disables buttons dynamically (Save / Update / Reset)

• Prevents storing empty or invalid data

• Performs real-time PUT, GET, and UPDATE operations using JPDB APIs

• Provides a clean UI using Bootstrap

The form consists of the following input fields:

• Project ID (Primary Key)

• Project Name

• Assigned To

• Assignment Date

• Deadline

🔑 Technologies Used

• HTML & Bootstrap (Frontend UI)

• JavaScript & jQuery (Client logic)

• JsonPowerDB (NoSQL Database)

• AJAX REST API calls

### *Benefits of Using JsonPowerDB*

JsonPowerDB (JPDB) is used as the backend database due to the following advantages:

🔥 High Performance

• Ultra-fast CRUD operations

• Low latency real-time database

⚡ Lightweight & Easy

• No server-side programming needed

• Simple API calls using JavaScript

📦 Document-Oriented + Key-Value Database

• Flexible schema

• No complex setup or configuration

🛡️ Secure & Reliable

• Built-in token-based authentication

• Safer than JSON files or browser storage

🧑‍🎓 Perfect for Educational & Rapid Prototyping

• Ideal for small apps, micro projects, and academic assignments

• Quick to understand and implement

#### Release History (release of your JsonPowerDB related code on Github) 


» v1.0 — Initial Release (21 Nov 2025)

• Implemented a complete Project Management System using JsonPowerDB.

• Features included:

• Add new project entries (Project ID as Primary Key)

• Fetch existing records based on Project ID

• Update existing records

• Form validation for required fields

• Auto-handling of rec_no using localStorage

• Technologies used:

• HTML, Bootstrap 3, JavaScript, jQuery

• JsonPowerDB REST API (PUT, GET, UPDATE)

• Successfully connected to:

• Database: COLLEGE-DB

• Table: PROJECT-TABLE

»  v1.1 — UI and Stability Improvements

• Improved form field behavior and reset mechanism.

• Disabled/Enabled buttons based on record state:

• Save enabled when no record exists

• Update enabled when record already exists

• Added better user flow:

• Cursor auto-focus handling

• Clear form reset behavior

»  v1.2 — Code Optimization

• Modularized JSON creation and form validation logic.

• Separated JavaScript logic into project.js.

• Cleaned unused code and improved variable naming for readability.

»  v1.3 — Final Stable Release

• Fully stable and production-ready version.

• Complete working implementation of:

•• Save (insert new record)

•• Update (modify existing record)

•• Reset (clear form and refresh state)

• Robust form validation for all required project fields.

##### Screenshots:

![image alt](https://github.com/Swikriti-0145/Micro-Project/blob/f86b7575b2aaf666579385353a490a041db2e164/Screenshot%202025-11-21%20190537.png)
