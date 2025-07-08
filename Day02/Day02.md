# 🦁 Sheryians Coding School Cohort – Day02 Learnings

## 📚 Table of Contents

### 🔌 Topic 1: Internet Protocols
1. [What is TCP Protocol and Why It’s Widely Used](#what-is-tcp-protocol-and-why-its-widely-used)  
2. [How Connection is Established Using TCP (3-Way Handshake)](#how-connection-is-established-using-tcp-3-way-handshake)  
3. [What is UDP and Why It's Used for Fast Communication](#what-is-udp-and-why-its-used-for-fast-communication)  
4. [How UDP Establishes Connection](#how-udp-establishes-connection)  
5. [Difference Between TCP and UDP](#difference-between-tcp-and-udp)

### 🌐 Topic 2: Understanding HTTP & HTTPS
6. [What is HTTP and Its Different Versions](#what-is-http-and-its-different-versions)  
7. [HTTP Status Codes for Responses](#http-status-codes-for-responses)  
8. [What is HTTPS and Why It’s Better Than HTTP](#what-is-https-and-why-its-better-than-http)  
9. [How HTTPS Provides a Secure Connection](#how-https-provides-a-secure-connection)  
10. [What Are Proxy and Reverse Proxy](#what-are-proxy-and-reverse-proxy)  
11. [How VPN Works and Helps Access Restricted Content](#how-vpn-works-and-helps-access-restricted-content)

### 💻 Topic 3: Preparing Your Machine (Dev Setup)
12. [Installing & Setting Up VS Code](#installing--setting-up-vs-code)  
13. [Setting Up Your Browser for Development](#setting-up-your-browser-for-development)  
14. [Creating Files & Folders](#creating-files--folders)

---

## 🧑‍💻 Resource Video link : https://youtu.be/RY32wSQDekE?si=E67ej0n-eQB70GQA

## 🔌Topic 1: Internet Protocols

### What is TCP Protocol and Why It’s Widely Used

**TCP (Transmission Control Protocol)** ensures:
- Reliable
- Ordered
- Error-free communication between devices

**Used in:**
- Web browsing
- File transfers (FTP, HTTP)
- Email (SMTP, IMAP, POP3)
- Messaging apps

**Example:**  
When you visit a website, your browser uses TCP to request data from the server. TCP ensures that all packets arrive in order and without errors.

---

### How Connection is Established Using TCP (3-Way Handshake)

1. **SYN** – Client sends a request to initiate connection  
2. **SYN-ACK** – Server acknowledges and responds  
3. **ACK** – Client confirms, and communication starts

**Example:**  
When logging into online banking, TCP ensures a stable connection before transmitting sensitive data.

---

### What is UDP and Why It's Used for Fast Communication

**UDP (User Datagram Protocol)** is:
- Connectionless
- Fast (prioritizes speed over reliability)

**Used in:**
- Video calls
- Online gaming
- Live streaming

**Example:**  
In online games, UDP sends real-time actions with minimal delay, even if some packets are lost.

**Misconception:**  
UDP is always unreliable – not true. Techniques like **Forward Error Correction (FEC)** increase reliability.

---

### How UDP Establishes Connection

- No handshake like TCP
- Packets are sent independently
- No retransmission if a packet is lost

**Example:**  
VoIP calls use UDP. The call continues even if some packets are lost, ensuring low-latency communication.

**Fact:**  
Modern apps may combine **TCP + UDP** for balance between speed and reliability.

---

### Difference Between TCP and UDP

| Feature        | TCP                        | UDP                        |
|----------------|-----------------------------|-----------------------------|
| Connection     | Connection-oriented         | Connectionless              |
| Reliability    | High (acknowledged packets) | Low (no guarantee)          |
| Speed          | Slower                      | Faster                      |
| Use Cases      | Web, Email, File Transfer   | Gaming, Streaming, VoIP     |

**Myth:**  
UDP is insecure — Actually, **UDP can be encrypted** using **DTLS (Datagram TLS)**.

---

## 🌐 Topic 2: Understanding HTTP & HTTPS

### What is HTTP and Its Different Versions

**HTTP (HyperText Transfer Protocol)** enables communication between browsers and servers.

**Versions:**
- **HTTP/1.1** – Persistent connections, pipelining
- **HTTP/2** – Multiplexing, header compression
- **HTTP/3** – QUIC-based (UDP), faster and secure

**Example:**  
A webpage makes multiple HTTP requests for images, scripts, and stylesheets.

**Fact:**  
**HTTP/3** handles network congestion more efficiently.

---

### HTTP Status Codes for Responses

| Code | Meaning                |
|------|------------------------|
| 200  | OK                     |
| 301  | Moved Permanently      |
| 404  | Not Found              |
| 500  | Internal Server Error  |

**Myth:**  
404 = Website removed — It can be temporary or due to other reasons.

---

### What is HTTPS and Why It’s Better Than HTTP

**HTTPS (HTTP Secure)**:
- Adds **SSL/TLS encryption** to HTTP
- Ensures secure transmission of data

**Example:**  
E-commerce and banking sites use HTTPS to protect user information.

**Myth:**  
HTTPS makes a site 100% secure — No, it only encrypts the connection, not the site’s code.

---

### How HTTPS Provides a Secure Connection

- Encrypts data **in transit** using TLS (not SSL anymore)
- Does not secure **data at rest**

**Fact:**  
**TLS 1.3** is the latest standard for encryption (SSL is outdated).

---

### What Are Proxy and Reverse Proxy

**Proxy:**  
- Acts as a middleman between user and internet

**Reverse Proxy:**  
- Intercepts client requests on behalf of the server
- Used for **security** and **load balancing**

**Example:**  
**CDNs** (like Cloudflare) use reverse proxies to reduce latency and defend against **DDoS attacks**.

---

### How VPN Works and Helps Access Restricted Content

**VPN (Virtual Private Network):**
- Encrypts internet traffic
- Reroutes traffic through remote servers

**Use Case:**  
Helps users access geo-blocked content (e.g., in China, Iran)

**Myth:**  
VPN = complete anonymity — True only if the provider has a **zero-log policy**.

---

## 💻 Topic 3: Preparing Your Machine (Dev Setup)

### Installing & Setting Up VS Code

**Steps:**
1. Download from [https://code.visualstudio.com](https://code.visualstudio.com)
2. Install extensions:
   - **ESLint** – Linting/code quality
   - **Live Server** – Real-time preview
   - **Prettier** – Code formatting

**Pro Tip:**  
Use `Ctrl + P` and `Ctrl + Shift + P` to open files and commands quickly.

---

### Setting Up Your Browser for Development

**Steps:**
1. Open DevTools – `F12` or `Ctrl + Shift + I`
2. Disable cache for instant reloads

**Pro Tip:**  
Edit live HTML/CSS directly in Chrome’s DevTools.

---

### Creating Files & Folders

Organize your project for maintainability.

**Command:**
```bash
touch index.html style.css script.js
```

<br>

## Created with ❤️ by Shivansh