export type Question = {
  id: string;
  marks: number;
  question: string;
  answer: string;
};

export type ModuleQuestions = {
  moduleId: string;
  moduleTitle: string;
  partA: Question[];
  partB: Question[];
};

export const QUESTIONS_DATA: ModuleQuestions[] = [
  {
    moduleId: 'm1',
    moduleTitle: 'Module 1: Computer Hardware',
    partA: [
      {
        id: 'm1-a-1',
        marks: 3,
        question: 'Explain the boot process of a computer.',
        answer: `The boot process involves:
1. **Power-On Self-Test (POST):** When power is switched on, the BIOS/UEFI firmware stored in ROM is executed. It performs POST — checking CPU, RAM, keyboard, and other hardware for faults. If POST fails, the system halts with beep codes.
2. **Bootloader Activation:** If POST passes, BIOS reads the Master Boot Record (MBR) or UEFI partition table to locate the bootloader (e.g., GRUB for Linux, Windows Boot Manager). The bootloader is loaded into RAM.
3. **Kernel Initialization:** The bootloader loads the OS kernel into RAM. The kernel initialises device drivers, mounts the file system, and starts system services/daemons.
4. **User Session Launch:** The OS presents the login screen or GUI desktop, completing the boot sequence.`
      },
      {
        id: 'm1-a-2',
        marks: 3,
        question: 'Describe how cache memory can enhance the performance of the CPU in a program execution environment.',
        answer: `* **What is cache?** Cache is a small, ultra-fast SRAM memory placed between the CPU and main RAM. Modern CPUs have L1 (fastest, ~32 KB), L2 (~256 KB), and L3 (~8 MB) caches.
* **Temporal Locality:** Instructions or data recently used are stored in cache, so the CPU finds them immediately on the next access without going to slow RAM.
* **Spatial Locality:** Neighbouring memory blocks are pre-fetched into cache, because programs tend to access nearby addresses sequentially.
* **Speed gain:** Cache access time is 1–5 ns vs 60–100 ns for RAM. A cache hit means the CPU avoids a costly RAM fetch, dramatically reducing latency.
* **Example:** A loop body is loaded into L1 cache on first execution; subsequent iterations execute at full CPU speed.`
      },
      {
        id: 'm1-a-3',
        marks: 3,
        question: 'Differentiate between RAM and ROM.',
        answer: `* **RAM (Random Access Memory):** Volatile — data is lost when power is off. Used to hold the currently running OS and programs. Read/write capable. Types: DRAM, SRAM. Example: 8 GB DDR4 in a laptop.
* **ROM (Read-Only Memory):** Non-volatile — retains data without power. Used to store firmware (BIOS/UEFI). Traditionally read-only, modern variants (EEPROM, Flash) allow limited writes. Example: BIOS chip on motherboard.
* **Key difference:** RAM is the workspace (temporary), ROM is the blueprint (permanent firmware).`
      },
      {
        id: 'm1-a-4',
        marks: 3,
        question: 'Differentiate between parallel bus and serial bus.',
        answer: `* **Parallel Bus:** Transmits multiple bits simultaneously over multiple wires. Faster at short distances but suffers from signal crosstalk and synchronisation problems at high speeds. Example: PCI bus, old IDE.
* **Serial Bus:** Transmits one bit at a time over a single wire/pair. Simpler, cheaper, and scales to very high speeds because there is no crosstalk. Example: USB, SATA, PCIe.
* **Modern trend:** Serial buses have replaced parallel buses in most applications due to better reliability at high frequencies.`
      },
      {
        id: 'm1-a-5',
        marks: 3,
        question: 'List and describe three common input peripherals and their primary functions.',
        answer: `1. **Keyboard:** Allows the user to enter text and commands. Each key press generates a scan code sent to the CPU via the keyboard controller.
2. **Mouse:** A pointing device that detects 2D motion and sends delta (x, y) movement data to the OS, enabling GUI interaction.
3. **Scanner:** Converts physical documents or images into digital data by sensing reflected light across the page, producing a bitmap image.`
      }
    ],
    partB: [
      {
        id: 'm1-b-1',
        marks: 9,
        question: 'Explain the memory hierarchy in a computer system with a labeled diagram and examples.',
        answer: `**Concept:** Memory hierarchy organises storage from fastest-smallest-expensive (top) to slowest-largest-cheap (bottom), exploiting locality to give near-register speed at near-disk cost.

**Levels of Hierarchy:**
1. **Level 0 — CPU Registers:** Tiny (32–64 bit) storage inside the CPU. Access time: <1 ns. Holds operands currently being processed. Example: EAX, EBX in x86.
2. **Level 1 — Cache (L1/L2/L3):** SRAM on or near the CPU die. L1: ~32 KB, 1–2 ns. Stores recently/frequently used data.
3. **Level 2 — Main Memory (RAM):** DRAM, GBs in size, 60–100 ns access. Holds the active OS and all running processes.
4. **Level 3 — Secondary Storage (SSD/HDD):** Non-volatile, TBs, millisecond access. Stores OS, files, applications permanently.
5. **Level 4/5 — Optical/Magnetic Tape:** Archival storage. Very cheap per GB but extremely slow.
6. **Virtual Memory:** Uses part of the SSD/HDD as an extension of RAM (swap space). When RAM is full, the OS pages out least-used memory blocks to disk.

**Diagram Representation:**
\`\`\`text
         / \\
        /Reg\\      <-- Registers (Fastest, Smallest)
       /L1,L2\\     <-- Cache Memory
      /   RAM   \\    <-- Main Memory
     / SSD / HDD \\   <-- Secondary Storage
    /  Tape / Disk  \\  <-- Archival (Slowest, Largest)
   -------------------
\`\`\``
      },
      {
        id: 'm1-b-2',
        marks: 9,
        question: 'What are the advantages of using SSDs over HDDs for data storage?',
        answer: `* **Speed:** SSDs use NAND flash with no moving parts — sequential read up to 550 MB/s (SATA) or 7000 MB/s (NVMe) vs ~150 MB/s for HDD.
* **Access time:** SSD random access ~0.1 ms vs HDD ~10 ms (no seek delay or rotational latency).
* **Durability:** No mechanical parts means SSDs withstand shock, vibration, and drops much better.
* **Silent operation:** No spinning platters or moving heads — completely silent.
* **Power efficiency:** SSDs consume 2–3 W vs 6–15 W for HDDs, extending laptop battery life.
* **Form factor:** SSDs are available in ultra-slim M.2 form factors, enabling thin laptops and compact devices.
* **Drawback of SSD:** Higher cost per GB compared to HDD; limited write endurance (TBW rating).`
      },
      {
        id: 'm1-b-3',
        marks: 9,
        question: 'Explain the hardware architecture of a computer / Components of a motherboard and their roles.',
        answer: `**Major components on a motherboard:** CPU socket, RAM slots (DIMM), chipset, PCIe slots, SATA connectors, M.2 slot, ROM chip, VRM.

**Roles of key components:**
1. **CPU Socket:** Physically mounts and electrically connects the processor to the board. A high-quality socket with good power delivery (VRM) ensures the CPU can boost to its maximum frequency reliably.
2. **RAM Slots (DIMM):** Hold DDR4/DDR5 memory modules. More slots allow more RAM; dual-channel or quad-channel configurations double memory bandwidth, reducing bottlenecks for CPU-intensive workloads.
3. **PCH / Chipset:** Acts as the traffic controller between CPU, RAM, storage, USB, PCIe devices, and other peripherals. Manages I/O bandwidth allocation and determines the number of supported PCIe lanes, USB ports, and SATA ports.`
      },
      {
        id: 'm1-b-4',
        marks: 4,
        question: 'Explain the role of buses in data communication within a computer.',
        answer: `**Definition:** A bus is a set of parallel conductors (wires/traces on PCB) that carry data, addresses, and control signals between computer components.

* **Data Bus:** Carries the actual data being transferred. Width (8/16/32/64 bits) determines how much data moves in one cycle.
* **Address Bus:** Carries the memory address specifying the source or destination of data. A 32-bit address bus can address 4 GB of memory.
* **Control Bus:** Carries control signals (Read/Write, Interrupt, Clock, Reset) that co-ordinate bus operations.
* **Types:** Internal bus (connects CPU to cache/RAM), expansion bus (PCIe for GPU/NIC), storage bus (SATA, NVMe), I/O bus (USB).
* **Modern trend:** High-speed serial point-to-point links (PCIe) have replaced older shared parallel buses for better speed and reduced interference.`
      }
    ]
  },
  {
    moduleId: 'm2',
    moduleTitle: 'Module 2: Data Representation & CPU Architecture',
    partA: [
      {
        id: 'm2-a-1',
        marks: 3,
        question: 'Why is Unicode encoding better than ASCII? Is ASCII still important? Justify.',
        answer: `* **ASCII limitations:** ASCII uses 7 bits, supporting only 128 characters (printable English letters, digits, punctuation), sufficient for English but inadequate for global applications.
* **Unicode advantages:** Uses variable-width encoding (UTF-8, UTF-16, UTF-32). UTF-8 is backward compatible with ASCII and can encode over 1.1 million code points — covering all world scripts, emoji, mathematical symbols. Example: Malayalam 'അ', emoji '😀'.
* **Is ASCII still relevant?** Yes — ASCII remains the foundation of computing. All ASCII code points are identical in UTF-8. It is still used in protocols (HTTP headers, email), configuration files, and systems where only English text is needed.`
      },
      {
        id: 'm2-a-2',
        marks: 3,
        question: 'Explain how a CPU executes an arithmetic operation (e.g., addition of two numbers) using the fetch-execute cycle.',
        answer: `1. **Fetch:** The Program Counter (PC) holds the address of the next instruction. The Control Unit sends this address on the address bus; the instruction is read from RAM into the Instruction Register (IR). PC is then incremented.
2. **Decode:** The Control Unit decodes the opcode in IR (e.g., ADD R1, R2). It identifies the operation type and the source/destination registers.
3. **Execute:** Operands from R1 and R2 are sent to the ALU. The ALU performs binary addition and places the result in the destination register (e.g., R3). Status flags (Zero, Carry, Overflow) are updated.
4. **Write-back:** If the result must be stored in memory, it is written back via the data bus.`
      },
      {
        id: 'm2-a-3',
        marks: 3,
        question: 'Illustrate unsigned integer representation and signed integer representation with an example.',
        answer: `* **Unsigned integers:** All bits represent magnitude. For 8 bits, range is 0 to 255 (2^8 - 1). Example: 00001101 = 13.
* **Signed integers (2's complement):** MSB is the sign bit (0 = positive, 1 = negative). For 8 bits, range is -128 to +127. 
* **To represent -13:** Start with 13 = 00001101 -> Invert for 1's comp = 11110010 -> Add 1 = 11110011. So -13 = 11110011.`
      },
      {
        id: 'm2-a-4',
        marks: 3,
        question: 'Explain the role of the Program Counter (PC) and Instruction Register (IR) in instruction execution.',
        answer: `* **Program Counter (PC):** A special-purpose register that always holds the memory address of the NEXT instruction to be fetched. After each fetch, the PC is automatically incremented.
* **Instruction Register (IR):** Holds the instruction currently being decoded and executed. The Control Unit reads the opcode from IR to determine what operation to perform.
* **Together:** PC points to what to fetch next; IR holds what is being processed now.`
      }
    ],
    partB: [
      {
        id: 'm2-b-1',
        marks: 9,
        question: 'Describe the function of an instruction set and explain how it facilitates software–hardware interaction.',
        answer: `* **Definition:** An Instruction Set Architecture (ISA) is the complete set of machine-level instructions that a CPU can execute. It is the contract between hardware designers and software (compiler) writers.
* **Instruction types:** Data transfer (MOV, LOAD, STORE), Arithmetic (ADD, SUB, MUL, DIV), Logical (AND, OR, NOT, XOR), Control flow (JMP, CALL, RET, branch), I/O instructions.
* **Instruction format:** Each instruction has an opcode (what to do) and operands (what to do it on — registers, immediate values, or memory addresses).
* **Software-hardware bridge:** High-level language code (C/Python) is compiled into ISA instructions. The CPU's hardwired circuits execute those instructions directly. Example: \`int c = a+b\` compiles to \`ADD R1, R2 -> R3\` in ARM ISA.
* **ISA families:** x86-64 (Intel/AMD PCs), ARM (smartphones, Apple Silicon), RISC-V.`
      },
      {
        id: 'm2-b-2',
        marks: 9,
        question: 'Illustrate the addition of two 4-bit binary numbers. Explain the process step by step.',
        answer: `**Example: Add 0101 (5) and 0011 (3). Expected result: 1000 (8).**

* **Step 1 — Bit 0 (LSB):** 1 + 1 = 10 -> sum bit = 0, carry = 1
* **Step 2 — Bit 1:** 0 + 1 + carry(1) = 10 -> sum bit = 0, carry = 1
* **Step 3 — Bit 2:** 1 + 0 + carry(1) = 10 -> sum bit = 0, carry = 1
* **Step 4 — Bit 3 (MSB):** 0 + 0 + carry(1) = 01 -> sum bit = 1, carry = 0

**Result:** 1000 (binary) = 8 (decimal). The carry-out from bit 3 is 0, so no overflow.
**Hardware:** Each bit addition is handled by a Full Adder circuit. Four full adders chained together form a 4-bit Ripple Carry Adder.`
      }
    ]
  },
  {
    moduleId: 'm3',
    moduleTitle: 'Module 3: Operating Systems, Networking & Security',
    partA: [
      {
        id: 'm3-a-1',
        marks: 3,
        question: 'Consider a multi-office company with each office site separated by a few hundred kilometers. Explain the possible networking technologies involved.',
        answer: `* **LAN at each office:** Within each office, computers are connected via a Local Area Network (Ethernet or Wi-Fi) for internal file sharing.
* **WAN between offices:** Offices hundreds of km apart are connected via a Wide Area Network. Technologies include MPLS (leased lines), broadband VPN tunnels, or SD-WAN.
* **VPN:** A Virtual Private Network encrypts traffic between offices over the public Internet, creating a secure private tunnel. Cost-effective alternative to leased lines.`
      },
      {
        id: 'm3-a-2',
        marks: 3,
        question: 'Is WWW the same as the Internet? Justify.',
        answer: `* **Internet:** The Internet is the global physical network infrastructure — millions of routers, switches, fibre cables connecting billions of devices. It supports many services: email, FTP, VoIP, and the Web.
* **WWW (World Wide Web):** The Web is ONE service that runs ON TOP of the Internet. It consists of interlinked hypertext documents accessed via browsers using HTTP/HTTPS.
* **Conclusion:** WWW != Internet. The Internet is the infrastructure (the roads); WWW is an application layer service built upon it (the delivery trucks).`
      },
      {
        id: 'm3-a-3',
        marks: 3,
        question: 'Explain the different types of system software.',
        answer: `* **Operating System (OS):** Core system software managing hardware resources, memory, processes, file systems. Examples: Linux, Windows, macOS.
* **Device Drivers:** Low-level programs that allow the OS to communicate with hardware devices (GPU driver, printer driver).
* **Utility Programs:** Tools that perform maintenance and optimisation tasks — disk defragmenters, antivirus, backup utilities.
* **Language Translators:** Compilers, assemblers, and interpreters that convert human-readable code into machine code.`
      },
      {
        id: 'm3-a-4',
        marks: 3,
        question: 'What is DHCP? Explain its basic functionality.',
        answer: `* **DHCP (Dynamic Host Configuration Protocol):** Automatically assigns IP addresses and network configuration parameters to devices on a network.
* **DORA process:** (1) Discover (client broadcasts), (2) Offer (server responds), (3) Request (client requests IP), (4) Acknowledge (server confirms lease).
* **Importance:** Enables plug-and-play networking without manual static IP configuration.`
      },
      {
        id: 'm3-a-5',
        marks: 3,
        question: 'List five basic Linux commands along with examples.',
        answer: `1. \`ls\` — List directory contents. Example: \`ls -la /home\` shows all files with permissions.
2. \`cd\` — Change directory. Example: \`cd /var/log\` navigates to the log directory.
3. \`mkdir\` — Create a new directory. Example: \`mkdir project\`
4. \`cp\` — Copy files or directories. Example: \`cp report.txt backup/report.txt\`
5. \`chmod\` — Change file permissions. Example: \`chmod 755 script.sh\``
      }
    ],
    partB: [
      {
        id: 'm3-b-1',
        marks: 9,
        question: 'A company has multiple offices in different cities and requires seamless data sharing. Compare client-server and peer-to-peer networks and recommend the better option.',
        answer: `* **Client-Server Network:** A dedicated server provides resources/services; clients request them. The server handles authentication, access control, storage, and backups centrally.
  * *Advantages:* Centralised security, easy to scale, reliable data backup, audit logging.
  * *Disadvantages:* Higher cost (server hardware), single point of failure (if not redundant).
* **Peer-to-Peer (P2P) Network:** Each device acts as both client and server. Resources are shared directly between peers.
  * *Advantages:* Low cost, easy to set up for small groups.
  * *Disadvantages:* Decentralised security, difficult to scale, inconsistent performance, hard to back up.
* **Recommendation:** Client-Server is far better for a multi-city company. It provides centralised data management, consistent security policies across all offices, and reliable backups.`
      },
      {
        id: 'm3-b-2',
        marks: 9,
        question: 'A startup is expanding and needs to implement network security. Propose a security plan including desktop security, perimeter security, and VPN.',
        answer: `* **Desktop Security:** (1) Install antivirus/anti-malware on all endpoints. (2) Enable OS auto-updates and patch management. (3) Enforce strong password policies and multi-factor authentication (MFA). (4) Use disk encryption (BitLocker) for stolen laptops.
* **Perimeter Security:** (1) Deploy a Next-Generation Firewall (NGFW) at the network boundary to inspect traffic. (2) Set up a DMZ for public-facing servers. (3) Use Intrusion Detection/Prevention Systems (IDS/IPS). (4) Implement DNS filtering.
* **VPN for Remote Access:** Deploy a VPN gateway (e.g., OpenVPN) that remote employees connect to before accessing internal systems. All traffic is encrypted (AES-256). Require MFA for VPN login.`
      },
      {
        id: 'm3-b-3',
        marks: 9,
        question: '(i) Explain the concept of a Client-Server network with a real-world example. (ii) Explain the role of DNS in internet communication.',
        answer: `**Client-Server Network:** A network model where one or more powerful computers (servers) provide services, and many other computers (clients) consume those services. Communication is always client-initiated.
* **Real-world example — Web browsing:** Your browser (client) sends an HTTP GET request to Google's web server. Google's server processes the request and sends back HTML/CSS/JS.

**Role of DNS:**
* DNS (Domain Name System) is the internet's phonebook. Humans use domain names (\`google.com\`); computers communicate using IP addresses (\`142.250.77.46\`). DNS translates domain names to IPs.
* **Why DNS matters:** Without DNS, users would have to memorise IP addresses for every website. DNS also enables load balancing and failover.`
      }
    ]
  },
  {
    moduleId: 'm4',
    moduleTitle: 'Module 4: Web Design (HTML, CSS & JavaScript)',
    partA: [
      {
        id: 'm4-a-1',
        marks: 3,
        question: 'Write a simple HTML code to display a heading and a paragraph.',
        answer: `\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Welcome to Foundations of Computing</h1>
  <p>This course covers hardware, networking, and web design.</p>
</body>
</html>
\`\`\``
      },
      {
        id: 'm4-a-2',
        marks: 3,
        question: 'In what situations would JavaScript be more useful than HTML and CSS alone? Provide an example.',
        answer: `* **HTML and CSS** are static — they define structure and presentation but cannot respond to user actions or change content dynamically after the page loads.
* **JavaScript** adds behaviour and interactivity: (1) Form validation, (2) Dynamic content (clocks), (3) Event handling (clicks), (4) Animations and AJAX.

*Example:* Showing the current time on button click:
\`\`\`html
<button onclick="document.getElementById('out').innerHTML = new Date();">
  Show Time
</button>
<p id="out"></p>
\`\`\``
      },
      {
        id: 'm4-a-3',
        marks: 3,
        question: 'What is HTML? What is CSS?',
        answer: `* **HTML (HyperText Markup Language):** The standard language for creating the structure and content of web pages. It uses elements (tags) like \`<h1>, <p>, <img>, <a>\`.
* **CSS (Cascading Style Sheets):** A stylesheet language that describes the visual presentation (colour, font, layout, spacing) of HTML elements. It separates content from design.`
      }
    ],
    partB: [
      {
        id: 'm4-b-1',
        marks: 9,
        question: 'Design a webpage using HTML and CSS for an online bookstore. Include a title, heading, list of book categories, and basic style.',
        answer: `\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BookNook — Online Bookstore</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px; }
    header { background: #1565c0; color: white; padding: 20px; text-align: center; }
    h1 { margin: 0; font-size: 2em; }
    ul { list-style-type: square; padding-left: 20px; }
    li { margin: 8px 0; font-size: 1.1em; color: #333; }
  </style>
</head>
<body>
  <header>
    <h1>BookNook</h1>
    <p>Your one-stop destination for all books</p>
  </header>
  <main>
    <h2>Browse by Category</h2>
    <ul>
      <li>Fiction & Literature</li>
      <li>Science & Technology</li>
      <li>Self-Help & Motivation</li>
      <li>History & Biography</li>
    </ul>
  </main>
</body>
</html>
\`\`\``
      },
      {
        id: 'm4-b-2',
        marks: 9,
        question: 'A university website needs to display a dynamic countdown timer for an upcoming event. Explain how JavaScript can be used to achieve this, with a sample script.',
        answer: `**Approach:** JavaScript's \`setInterval()\` function repeatedly executes a callback every 1000 ms. On each call, the current time is subtracted from the event date to compute remaining days, hours, minutes, and seconds.

\`\`\`html
<div id="timer">Loading...</div>
<script>
  const eventDate = new Date('2025-12-01T09:00:00').getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;
    
    if (diff <= 0) {
      document.getElementById('timer').innerHTML = 'Event has started!';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('timer').innerHTML = 
      \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
</script>
\`\`\``
      },
      {
        id: 'm4-b-3',
        marks: 9,
        question: 'Illustrate the different ways in which style sheets can be applied to a web page with simple examples.',
        answer: `**1. Inline CSS:** Style is applied directly to a single HTML element using the \`style\` attribute. Highest specificity.
\`\`\`html
<p style="color: red; font-size: 16px;">Inline styled paragraph</p>
\`\`\`

**2. Internal (Embedded) CSS:** CSS rules are placed inside a \`<style>\` tag in the \`<head>\` section. Applies to that page only.
\`\`\`html
<style>
  p { color: blue; font-size: 14px; }
</style>
\`\`\`

**3. External CSS:** CSS rules are written in a separate \`.css\` file and linked using \`<link>\`. Best practice for multi-page websites.
\`\`\`html
<!-- In HTMLhead -->
<link rel="stylesheet" href="styles.css">

<!-- In styles.css -->
p { color: green; font-size: 16px; line-height: 1.5; }
\`\`\``
      }
    ]
  }
];
