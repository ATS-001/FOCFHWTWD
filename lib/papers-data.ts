export type Question = {
  id: string;
  marks: number;
  question: string;
  answer: string;
};

export type PartBQuestionBundle = {
  id: string;
  subQuestions: Question[];
};

export type ModuleChoice = {
  moduleTitle: string;
  choice1: PartBQuestionBundle;
  choice2: PartBQuestionBundle;
};

export type QuestionPaper = {
  paperId: string;
  paperTitle: string;
  partA: Question[];
  partBChoices: ModuleChoice[];
};

export const PAPERS_DATA: QuestionPaper[] = [
  {
    paperId: 'may2025',
    paperTitle: 'May 2025 (Regular) Examination',
    partA: [
      {
        id: 'may25-a1',
        marks: 3,
        question: 'Differentiate between parallel bus and serial bus.',
        answer: `* **Parallel Bus:** Transmits multiple bits simultaneously over multiple wires. Faster at short distances but suffers from signal crosstalk and synchronisation problems at high speeds. Example: PCI bus, old IDE.\n* **Serial Bus:** Transmits one bit at a time over a single wire/pair. Simpler, cheaper, and scales to very high speeds because there is no crosstalk. Example: USB, SATA, PCIe.\n* **Modern trend:** Serial buses have replaced parallel buses in most applications due to better reliability at high frequencies.`
      },
      {
        id: 'may25-a2',
        marks: 3,
        question: 'Explain the boot process in a computer, from power-on to loading the operating system.',
        answer: `The boot process involves:\n1. **Power-On Self-Test (POST):** When power is switched on, the BIOS/UEFI firmware stored in ROM is executed. It performs POST — checking CPU, RAM, keyboard, and other hardware for faults. If POST fails, the system halts with beep codes.\n2. **Bootloader Activation:** If POST passes, BIOS reads the Master Boot Record (MBR) or UEFI partition table to locate the bootloader (e.g., GRUB for Linux, Windows Boot Manager). The bootloader is loaded into RAM.\n3. **Kernel Initialization:** The bootloader loads the OS kernel into RAM. The kernel initialises device drivers, mounts the file system, and starts system services/daemons.\n4. **User Session Launch:** The OS presents the login screen or GUI desktop, completing the boot sequence.`
      },
      {
        id: 'may25-a3',
        marks: 3,
        question: 'Explain how a CPU executes an arithmetic operation (e.g., addition of two numbers) using the fetch-execute cycle.',
        answer: `1. **Fetch:** The Program Counter (PC) holds the address of the next instruction. The Control Unit sends this address on the address bus; the instruction is read from RAM into the Instruction Register (IR). PC is then incremented.\n2. **Decode:** The Control Unit decodes the opcode in IR (e.g., ADD R1, R2). It identifies the operation type and the source/destination registers.\n3. **Execute:** Operands from R1 and R2 are sent to the ALU. The ALU performs binary addition and places the result in the destination register (e.g., R3). Status flags (Zero, Carry, Overflow) are updated.\n4. **Write-back:** If the result must be stored in memory, it is written back via the data bus.`
      },
      {
        id: 'may25-a4',
        marks: 3,
        question: 'Illustrate unsigned integer representation and signed integer representation with an example.',
        answer: `* **Unsigned integers:** All bits represent magnitude. For 8 bits, range is 0 to 255 (2^8 - 1). Example: 00001101 = 13.\n* **Signed integers (2's complement):** MSB is the sign bit (0 = positive, 1 = negative). For 8 bits, range is -128 to +127.\n* **To represent -13:** Start with 13 = 00001101 -> Invert for 1's comp = 11110010 -> Add 1 = 11110011. So -13 = 11110011.`
      },
      {
        id: 'may25-a5',
        marks: 3,
        question: 'Consider a multi-office company with each office site within the city. The offices are equipped with a network of computers. Explain the possible type of networks involved in the communication between two computers of the company.',
        answer: `* **LAN at each office:** Within each office, computers are connected via a Local Area Network (Ethernet or Wi-Fi) for internal file sharing.\n* **WAN / MAN between offices:** Offices separated by distance are connected via a Wide Area Network or Metropolitan Area Network. Technologies include MPLS (leased lines), broadband VPN tunnels, or SD-WAN.\n* **VPN:** A Virtual Private Network encrypts traffic between offices over the public Internet, creating a secure private tunnel. Cost-effective alternative to leased lines.`
      },
      {
        id: 'may25-a6',
        marks: 3,
        question: 'Explain the different types of system software.',
        answer: `* **Operating System (OS):** Core system software managing hardware resources, memory, processes, file systems. Examples: Linux, Windows, macOS.\n* **Device Drivers:** Low-level programs that allow the OS to communicate with hardware devices (GPU driver, printer driver).\n* **Utility Programs:** Tools that perform maintenance and optimisation tasks — disk defragmenters, antivirus, backup utilities.\n* **Language Translators:** Compilers, assemblers, and interpreters that convert human-readable code into machine code.`
      },
      {
        id: 'may25-a7',
        marks: 3,
        question: 'Create an unordered list and a hyperlink using HTML.',
        answer: `\`\`\`html\n<!-- Unordered List -->\n<ul>\n  <li>Computer Hardware</li>\n  <li>Operating Systems</li>\n  <li>Web Design</li>\n</ul>\n\n<!-- Hyperlink -->\n<a href="https://www.ktu.edu.in" target="_blank">Visit KTU Website</a>\n\`\`\``
      },
      {
        id: 'may25-a8',
        marks: 3,
        question: 'In what situations would JavaScript be more useful than HTML and CSS alone? Provide an example.',
        answer: `* **HTML and CSS** are static — they define structure and presentation but cannot respond to user actions or change content dynamically after the page loads.\n* **JavaScript** adds behaviour and interactivity: (1) Form validation, (2) Dynamic content (clocks), (3) Event handling (clicks), (4) Animations and AJAX.\n\n*Example:* Showing the current time on button click:\n\`\`\`html\n<button onclick="document.getElementById('out').innerHTML = new Date();">\n  Show Time\n</button>\n<p id="out"></p>\n\`\`\``
      }
    ],
    partBChoices: [
      {
        moduleTitle: 'Module 1',
        choice1: {
          id: 'may25-m1-c1',
          subQuestions: [
            {
              id: 'may25-q9a',
              marks: 5,
              question: 'Discuss the memory hierarchy in a computer system, explaining the functions of registers, cache memory, RAM, and virtual memory.',
              answer: `**Concept:** Memory hierarchy organises storage from fastest-smallest-expensive (top) to slowest-largest-cheap (bottom).\n\n1. **CPU Registers:** Tiny (32–64 bit) storage inside the CPU. Access time: <1 ns. Holds operands currently being processed.\n2. **Cache (L1/L2/L3):** SRAM on or near the CPU die. Stores recently/frequently used data to prevent going to slower RAM.\n3. **Main Memory (RAM):** DRAM, GBs in size, holds the active OS and all running processes.\n4. **Virtual Memory:** Uses part of the SSD/HDD as an extension of RAM (swap space). When RAM is full, the OS pages out least-used memory blocks to disk.`
            },
            {
              id: 'may25-q9b',
              marks: 4,
              question: 'What are the advantages of using SSDs over HDDs for data storage?',
              answer: `* **Speed:** SSDs use NAND flash with no moving parts — sequential read up to 550 MB/s (SATA) or 7000 MB/s (NVMe) vs ~150 MB/s for HDD.\n* **Access time:** SSD random access ~0.1 ms vs HDD ~10 ms (no seek delay or rotational latency).\n* **Durability:** No mechanical parts means SSDs withstand shock, vibration, and drops much better.\n* **Silent operation:** No spinning platters or moving heads — completely silent.\n* **Power efficiency:** SSDs consume 2–3 W vs 6–15 W for HDDs, extending laptop battery life.`
            }
          ]
        },
        choice2: {
          id: 'may25-m1-c2',
          subQuestions: [
            {
              id: 'may25-q10a',
              marks: 5,
              question: 'Explain the hardware architecture of a computer.',
              answer: `**Hardware Architecture (Von Neumann Architecture)** typically consists of:\n\n1. **Central Processing Unit (CPU):** The brain of the computer. It contains the Control Unit (CU) which manages instructions, the Arithmetic Logic Unit (ALU) for calculations, and Registers for rapid temporary storage.\n2. **Memory Unit (RAM & ROM):** Primary memory used to store data and instructions that are currently being processed by the CPU.\n3. **Input/Output (I/O) Devices:** Input devices (keyboard, mouse) allow users to send data to the system. Output devices (monitor, printer) display the processed results.\n4. **System Bus:** The communication channels (Data Bus, Address Bus, Control Bus) that link the CPU, Memory, and I/O components together for data transfer.`
            },
            {
              id: 'may25-q10b',
              marks: 4,
              question: 'Define firmware. How does it differ from software?',
              answer: `* **Firmware:** Software that is permanently programmed into a hardware device's read-only memory (ROM/Flash). It provides the low-level control for the device's specific hardware.\n* **Example:** BIOS/UEFI on a motherboard, or code inside a TV remote.\n* **Difference from Software:** Software refers to high-level programs that users interact with (OS, applications) and are loaded into RAM from secondary storage. Firmware is tightly coupled with hardware and rarely updated, acting as the fundamental interface between hardware and higher-level software.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 2',
        choice1: {
          id: 'may25-m2-c1',
          subQuestions: [
            {
              id: 'may25-q11a',
              marks: 5,
              question: 'A new character encoding system is being developed for a multilingual application. Explain why Unicode would be preferred over ASCII for such purposes.',
              answer: `* **Scope of characters:** ASCII supports only 128 characters (7-bit), sufficient for English but inadequate for global applications. Unicode (version 15) defines over 149,000 characters spanning 161 scripts — Latin, Arabic, Devanagari, CJK ideographs, and emoji.\n* **UTF-8 encoding:** The most common Unicode encoding. fully backward compatible with ASCII. Uses 1 byte for ASCII-compatible characters, 2–4 bytes for others.\n* **Internationalisation (i18n):** Multilingual apps must display user interfaces, store user data, and process input in any language. Unicode provides a single unified standard, eliminating the need for multiple encoding systems.`
            },
            {
              id: 'may25-q11b',
              marks: 4,
              question: 'Describe the function of an instruction set and explain how it facilitates software – hardware interaction.',
              answer: `* **Definition:** An Instruction Set Architecture (ISA) is the complete set of machine-level instructions that a CPU can execute. It is the contract between hardware designers and software (compiler) writers.\n* **Software-hardware bridge:** High-level language code (C/Python) is compiled into ISA instructions. The CPU's hardwired circuits execute those instructions directly. Example: \`int c = a+b\` compiles to \`ADD R1, R2 -> R3\` in ARM ISA.\n* **Instruction format:** Each instruction has an opcode (what to do) and operands (what to do it on — registers, immediate values, or memory addresses).`
            }
          ]
        },
        choice2: {
          id: 'may25-m2-c2',
          subQuestions: [
            {
              id: 'may25-q12a',
              marks: 5,
              question: 'Explain the fetch-decode-execute cycle in detail, and describe the sequence of events that occur during instruction execution in a CPU.',
              answer: `1. **Fetch:** PC value is placed on the address bus. Memory returns the instruction at that address. The instruction is stored in IR. PC is incremented to point to the next instruction.\n2. **Decode:** The Control Unit examines the opcode in IR. It generates internal control signals: which ALU operation to perform, which registers to use, whether to read/write memory.\n3. **Execute:** The ALU performs the operation (add, subtract, compare). Data may be read from or written to registers or RAM. For branch instructions, PC may be updated to a new address.\n4. **Write-back:** The result is stored in the destination register or memory location.`
            },
            {
              id: 'may25-q12b',
              marks: 4,
              question: 'Illustrate the addition of two 4-bit binary numbers and explain the process step by step.',
              answer: `**Example: Add 0101 (5) and 0011 (3). Expected result: 1000 (8).**\n\n* **Step 1 — Bit 0 (LSB):** 1 + 1 = 10 -> sum bit = 0, carry = 1\n* **Step 2 — Bit 1:** 0 + 1 + carry(1) = 10 -> sum bit = 0, carry = 1\n* **Step 3 — Bit 2:** 1 + 0 + carry(1) = 10 -> sum bit = 0, carry = 1\n* **Step 4 — Bit 3 (MSB):** 0 + 0 + carry(1) = 01 -> sum bit = 1, carry = 0\n\n**Result:** 1000 (binary) = 8 (decimal). The carry-out from bit 3 is 0, so no overflow.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 3',
        choice1: {
          id: 'may25-m3-c1',
          subQuestions: [
            {
              id: 'may25-q13a',
              marks: 5,
              question: 'A company has multiple offices in different cities and requires seamless data sharing. Compare the suitability of client-server and peer-to-peer networks for this purpose, and recommend the better option.',
              answer: `* **Client-Server Network:** A dedicated server provides resources/services; clients request them. The server handles authentication, access control, storage, and backups centrally.\n  * *Advantages:* Centralised security, easy to scale, reliable data backup, audit logging.\n  * *Disadvantages:* Higher cost (server hardware), single point of failure (if not redundant).\n* **Peer-to-Peer (P2P) Network:** Each device acts as both client and server.\n  * *Advantages:* Low cost, easy to set up for small groups.\n  * *Disadvantages:* Decentralised security, difficult to scale, hard to manage.\n* **Recommendation:** Client-Server is far better for a multi-city company due to centralized management, reliable backups, and consistent security features.`
            },
            {
              id: 'may25-q13b',
              marks: 4,
              question: 'Provide the Linux commands for the following operations: (i) Create a directory (ii) List all the files and sub folders in a directory (iii) Copy the contents of a text file (iv) Change the access permissions of files and directories.',
              answer: `* **(i) Create a directory:** \`mkdir\` (e.g., \`mkdir reports\`)\n* **(ii) List files and subfolders:** \`ls -la\` (lists all including hidden, with long format showing permissions)\n* **(iii) Copy contents:** \`cp\` (e.g., \`cp file.txt backup/\`)\n* **(iv) Change access permissions:** \`chmod\` (e.g., \`chmod 755 script.sh\`)`
            }
          ]
        },
        choice2: {
          id: 'may25-m3-c2',
          subQuestions: [
            {
              id: 'may25-q14a',
              marks: 5,
              question: 'Compare star, mesh, and ring network topologies with suitable diagrams.',
              answer: `* **Star Topology:** All devices connect to a central switch/hub. Most common in LANs. Advantages: easy to add/remove devices, failure of one node doesn't affect others. Disadvantage: central switch is single point of failure.\n* **Mesh Topology:** Every device is connected to every other device (full mesh) or to several others (partial mesh). Advantages: highly fault-tolerant — if one link fails, traffic routes around it. Disadvantage: expensive (many cables/ports), complex to manage.\n* **Ring Topology:** Devices are connected in a closed loop. Data travels in one direction (or both in dual ring). Advantages: equal access, predictable performance. Disadvantage: a single break can disrupt the entire network (unless dual ring).`
            },
            {
              id: 'may25-q14b',
              marks: 4,
              question: 'Examine the components of the World Wide Web, including HTTP and HTTPS protocols.',
              answer: `* **World Wide Web (WWW):** An information system on the Internet that allows documents to be connected to other documents by hypertext links.\n* **Web Browser & Client:** The application (e.g., Chrome) used to request and render resources.\n* **Web Server:** A computer hosting website files and responding to requests.\n* **HTML:** The standard markup language for documents designed to be displayed in a web browser.\n* **URL:** Uniform Resource Locator, the address of a given unique resource on the web.\n* **HTTP (Hypertext Transfer Protocol):** The protocol over which web traffic runs. It defines how messages are formatted and transmitted.\n* **HTTPS (HTTP Secure):** The secure version of HTTP. It uses SSL/TLS to encrypt the data transferred to protect against eavesdropping and tampering.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 4',
        choice1: {
          id: 'may25-m4-c1',
          subQuestions: [
            {
              id: 'may25-q15a',
              marks: 5,
              question: 'Create an HTML structure for a student registration form. Include the following fields: Name (text input), Age (number input), Gender (radio buttons), and Submit button.',
              answer: `\`\`\`html\n<form>\n  <!-- Name -->\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required>\n\n  <!-- Age -->\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" required>\n\n  <!-- Gender -->\n  <label>Gender:</label>\n  <input type="radio" id="male" name="gender" value="male">\n  <label for="male">Male</label>\n  <input type="radio" id="female" name="gender" value="female">\n  <label for="female">Female</label>\n\n  <!-- Submit -->\n  <input type="submit" value="Submit">\n</form>\n\`\`\``
            },
            {
              id: 'may25-q15b',
              marks: 4,
              question: 'Write a JavaScript program to display an alert box that shows the current date and time when a button is clicked.',
              answer: `\`\`\`html\n<button onclick="showAlert()">Show Date & Time</button>\n\n<script>\n  function showAlert() {\n    const currentDateTime = new Date().toLocaleString();\n    alert("Current Date and Time: " + currentDateTime);\n  }\n</script>\n\`\`\``
            }
          ]
        },
        choice2: {
          id: 'may25-m4-c2',
          subQuestions: [
            {
              id: 'may25-q16a',
              marks: 5,
              question: 'Design a webpage using HTML and CSS for an online bookstore. Include a title, a heading, a list of book categories, and a basic style.',
              answer: `\`\`\`html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>BookNook Online Bookstore</title>\n  <style>\n    body { font-family: sans-serif; background-color: #f4f4f9; padding: 20px; }\n    header { background-color: #2c3e50; color: white; padding: 15px; text-align: center; }\n    ul { list-style-type: square; color: #333; margin-top: 20px; }\n    li { padding: 5px 0; }\n    .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <header>\n      <h1>Welcome to BookNook</h1>\n    </header>\n    <h2>Book Categories</h2>\n    <ul>\n      <li>Science Fiction & Fantasy</li>\n      <li>Mystery & Thriller</li>\n      <li>Biography & Autobiography</li>\n      <li>Computers & Technology</li>\n    </ul>\n  </div>\n</body>\n</html>\n\`\`\``
            },
            {
              id: 'may25-q16b',
              marks: 4,
              question: 'Write a CSS rule to style a paragraph with the following properties: Font colour: Dark green, Font size: 16px, Line height: 1.5.',
              answer: `\`\`\`css\np {\n  color: darkgreen;\n  font-size: 16px;\n  line-height: 1.5;\n}\n\`\`\``
            }
          ]
        }
      }
    ]
  },
  {
    paperId: 'jan2026',
    paperTitle: 'January 2026 (Supplementary) Examination',
    partA: [
      {
        id: 'jan26-a1',
        marks: 3,
        question: 'Differentiate between RAM and ROM.',
        answer: `* **RAM (Random Access Memory):** Volatile — data is lost when power is off. Used to hold the currently running OS and programs. Read/write capable. Types: DRAM, SRAM. Example: 8 GB DDR4 in a laptop.\n* **ROM (Read-Only Memory):** Non-volatile — retains data without power. Used to store firmware (BIOS/UEFI). Traditionally read-only, modern variants (EEPROM, Flash) allow limited writes. Example: BIOS chip on motherboard.\n* **Key difference:** RAM is the workspace (temporary), ROM is the blueprint (permanent firmware).`
      },
      {
        id: 'jan26-a2',
        marks: 3,
        question: 'List and describe three common input peripherals and their primary functions in a computer system.',
        answer: `1. **Keyboard:** Allows the user to enter text and commands. Each key press generates a scan code sent to the CPU via the keyboard controller.\n2. **Mouse:** A pointing device that detects 2D motion and sends delta (x, y) movement data to the OS, enabling GUI interaction.\n3. **Scanner:** Converts physical documents or images into digital data by sensing reflected light across the page, producing a bitmap image.`
      },
      {
        id: 'jan26-a3',
        marks: 3,
        question: 'Perform the following: a) 249.40 to binary. b) 110110.01 to decimal. c) Subtract 110 from 11001.',
        answer: `* **(a) 249.40 to binary:** Integer part 249: \`249=11111001\`. Fractional part 0.40: \`0.40x2=0.80(0)\`, \`0.80x2=1.60(1)\`, \`0.60x2=1.20(1)\`, \`0.20x2=0.40(0)\`, repeating. Result: \`11111001.0110...\`\n* **(b) 110110.01 to decimal:** \`1x32 + 1x16 + 0x8 + 1x4 + 1x2 + 0x1 + 0x0.5 + 1x0.25 = 32+16+4+2+0.25 = 54.25\`\n* **(c) Subtract 110 from 11001:** \`11001 - 110 = 11001 - 00110 = 10011\`. Verification: \`25 - 6 = 19\` (\`10011\` is \`19\`).`
      },
      {
        id: 'jan26-a4',
        marks: 3,
        question: 'Explain the role of the program counter (PC) and instruction register (IR) in instruction execution.',
        answer: `* **Program Counter (PC):** A special-purpose register that always holds the memory address of the NEXT instruction to be fetched. After each fetch, the PC is automatically incremented.\n* **Instruction Register (IR):** Holds the instruction currently being decoded and executed. The Control Unit reads the opcode from IR to determine what operation to perform.\n* **Together:** PC points to what to fetch next; IR holds what is being processed now.`
      },
      {
        id: 'jan26-a5',
        marks: 3,
        question: 'List five basic Linux commands along with examples.',
        answer: `1. \`ls\` — List directory contents. Example: \`ls -la /home\` shows all files with permissions.\n2. \`cd\` — Change directory. Example: \`cd /var/log\` navigates to the log directory.\n3. \`mkdir\` — Create a new directory. Example: \`mkdir project\`\n4. \`cp\` — Copy files or directories. Example: \`cp report.txt backup/report.txt\`\n5. \`chmod\` — Change file permissions. Example: \`chmod 755 script.sh\``
      },
      {
        id: 'jan26-a6',
        marks: 3,
        question: 'What is DHCP? Explain its basic functionality.',
        answer: `* **DHCP (Dynamic Host Configuration Protocol):** Automatically assigns IP addresses and network configuration parameters to devices on a network.\n* **DORA process:** (1) Discover (client broadcasts), (2) Offer (server responds), (3) Request (client requests IP), (4) Acknowledge (server confirms lease).\n* **Importance:** Enables plug-and-play networking without manual static IP configuration.`
      },
      {
        id: 'jan26-a7',
        marks: 3,
        question: 'What is HTML, and what is its primary purpose in web design?',
        answer: `* **HTML (HyperText Markup Language):** The standard language for creating the structure and content of web pages. It uses elements (tags) like \`<h1>, <p>, <img>, <a>\` to define headings, paragraphs, images, and links.\n* **Primary Purpose:** To provide the sematic structure (the "skeleton") of the webpage, allowing browsers to interpret and render the visible content.`
      },
      {
        id: 'jan26-a8',
        marks: 3,
        question: 'What is CSS?',
        answer: `* **CSS (Cascading Style Sheets):** A stylesheet language that describes the visual presentation (colour, font, layout, spacing) of HTML elements.\n* **Purpose:** It separates content (HTML) from design (CSS), making pages easier to maintain and enabling consistent styling across many pages. It also allows developers to create responsive designs that adapt to different screen sizes.`
      }
    ],
    partBChoices: [
      {
        moduleTitle: 'Module 1',
        choice1: {
          id: 'jan26-m1-c1',
          subQuestions: [
            {
              id: 'jan26-q9a',
              marks: 5,
              question: 'Explain the different methods of I/O communication.',
              answer: `The primary methods of I/O communication are:\n1. **Programmed I/O:** The CPU constantly polls the I/O device's status register to check if it's ready. Very inefficient as it wastes CPU cycles.\n2. **Interrupt-driven I/O:** The CPU issues a command to the I/O module and then does other work. When the I/O module is ready, it sends an interrupt signal to the CPU.\n3. **Direct Memory Access (DMA):** The CPU grants an I/O module (DMA controller) authority to read from or write to memory directly, without CPU involvement. Used for large data transfers (e.g., disk reads), making the system much more efficient.`
            },
            {
              id: 'jan26-q9b',
              marks: 4,
              question: 'Explain the characteristics of SSD with a block diagram.',
              answer: `**Characteristics:**\n* Uses non-volatile NAND flash memory instead of spinning magnetic platters.\n* No moving parts, making them highly resistant to physical shock and completely silent.\n* Much faster read/write speeds and drastically lower access latency than HDDs.\n\n**Block Diagram Concept:**\n\`\`\`text\n[Host Interface (SATA/NVMe)] <--> [SSD Controller & Cache] <--> [NAND Flash Memory Chips]\n\`\`\``
            }
          ]
        },
        choice2: {
          id: 'jan26-m1-c2',
          subQuestions: [
            {
              id: 'jan26-q10a',
              marks: 5,
              question: 'Explain about the main components on a motherboard.',
              answer: `**Major components on a motherboard:**\n1. **CPU Socket:** Secures the processor and connects it directly to the motherboard pathways.\n2. **Memory Slots (DIMM):** Holds the system's RAM sticks.\n3. **Chipset:** Silicon chips that control traffic and data flow between the CPU, RAM, storage, and peripherals.\n4. **Expansion Slots (PCIe):** Used to add dedicated graphics cards (GPUs), network cards, or other expansion cards.\n5. **Storage Connectors (SATA, M.2):** Connect storage drives like HDDs and SSDs to the motherboard.\n6. **Power Connectors:** Connects to the Power Supply Unit (PSU) to distribute power (e.g., 24-pin ATX).`
            },
            {
              id: 'jan26-q10b',
              marks: 4,
              question: 'Describe device management in an operating system and explain its key responsibilities.',
              answer: `**Device Management** is the OS component responsible for managing all hardware devices connected to the computer.\n**Key Responsibilities:**\n1. **Tracking Status:** Keeps track of which devices are busy, free, or malfunctioning.\n2. **Allocation & Deallocation:** Decides which process gets a device, when, and for how long. It allocates the device, and when the process is done, it deallocates it.\n3. **Device Drivers:** Uses device drivers to facilitate seamless communication between generic OS commands and the specific hardware.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 2',
        choice1: {
          id: 'jan26-m2-c1',
          subQuestions: [
            {
              id: 'jan26-q11a',
              marks: 5,
              question: 'Explain the different number systems used in digital computers.',
              answer: `1. **Binary (Base 2):** Uses digits \`0\` and \`1\`. It is the native language of computers, corresponding to the ON/OFF states of transistors.\n2. **Decimal (Base 10):** Uses digits \`0-9\`. The standard human notation. Used for input and output, but must be converted to binary internally.\n3. **Octal (Base 8):** Uses digits \`0-7\`. Used historically because it's easy to translate to binary (each octal digit is exactly 3 bits).\n4. **Hexadecimal (Base 16):** Uses digits \`0-9\` and \`A-F\`. Extremely common in modern computing because one hex digit maps perfectly to 4 bits (a nibble), making large binary numbers easier to read.`
            },
            {
              id: 'jan26-q11b',
              marks: 4,
              question: 'Explain assembly language and the role of assembler.',
              answer: `* **Assembly Language:** A low-level programming language where there is a strong correspondence between the language's instructions and the architecture's machine code. It uses human-readable mnemonics (like \`ADD\`, \`MOV\`) instead of raw binary.\n* **Role of Assembler:** An assembler is a translator program that takes assembly language code as input and converts (assembles) it into directly executable machine code (binary \`1\`s and \`0\`s).`
            }
          ]
        },
        choice2: {
          id: 'jan26-m2-c2',
          subQuestions: [
            {
              id: 'jan26-q12a',
              marks: 5,
              question: 'Describe the main components of CPU with a block diagram.',
              answer: `**Main Components:**\n1. **Control Unit (CU):** The brain of the CPU. Directs the fetch-decode-execute cycle and manages internal control signals.\n2. **Arithmetic Logic Unit (ALU):** Performs mathematical calculations (addition, subtraction) and logical comparisons (AND, OR).\n3. **Registers:** Ultra-fast, tiny storage locations inside the CPU holding data and instructions currently in use (e.g., PC, IR, ACC).\n\n**Block Diagram Concept:**\n\`\`\`text\n[ Memory ] <--> [ Control Unit ] <--> [ Registers ]\n                  \\-- [ ALU ] --/\n\`\`\``
            },
            {
              id: 'jan26-q12b',
              marks: 4,
              question: 'Explain different instruction types with example.',
              answer: `1. **Data Transfer:** Moves data between registers and memory. Example: \`MOV R1, R2\` / \`LOAD R1, [Address]\`\n2. **Arithmetic:** Performs math operations. Example: \`ADD R1, R2\`\n3. **Logical:** Bitwise operations. Example: \`AND R1, R2\`\n4. **Control Flow / Branching:** Changes execution path. Example: \`JMP [Address]\` (Jump to address) / \`CALL Function\``
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 3',
        choice1: {
          id: 'jan26-m3-c1',
          subQuestions: [
            {
              id: 'jan26-q13a',
              marks: 5,
              question: 'Explain the topology that can be used in critical networks where uptime and fault tolerance are crucial.',
              answer: `**Mesh Topology:** Every device is connected to every other device (in a full mesh) or to several others (in a partial mesh).\n* **High Fault Tolerance:** If one cable or node hardware fails, traffic is automatically routed around the failure using alternative pathways.\n* **High Uptime:** Because there are redundant links, the network rarely experiences total outages.\n* **Applications:** Military installations, core Internet backbone routers, and critical corporate infrastructure where downtime is unacceptable.`
            },
            {
              id: 'jan26-q13b',
              marks: 4,
              question: 'Explain the structure of an IPv4 address with examples.',
              answer: `* **Structure:** An IPv4 address is a 32-bit numerical label assigned to a device. It is generally written in standard "dotted-decimal" notation, dividing the 32 bits into four 8-bit octets.\n* **Range:** Each octet ranges from 0 to 255 (e.g., \`192.168.1.1\`).\n* **Components:** Each address consists of a **Network ID** (identifies the specific network) and a **Host ID** (identifies the specific device on that network). The subnet mask determines where the network ID ends and host ID begins.\n* **Example:** \`142.250.190.46\` (a public Google IP).`
            }
          ]
        },
        choice2: {
          id: 'jan26-m3-c2',
          subQuestions: [
            {
              id: 'jan26-q14a',
              marks: 5,
              question: 'Consider a university with multiple campuses across a city. Explain the possible types of networking technologies involved in enabling seamless data exchange, centralized resource access, and secure communications between campuses.',
              answer: `* **MAN (Metropolitan Area Network):** Because the campuses are spread across a single city, a MAN (using fibre optics or leased lines from ISPs) can connect the various campus LANs into a single cohesive network.\n* **SD-WAN / VPN over Internet:** For a more cost-effective secure connection, encrypted VPN tunnels over standard broadband can link the campuses.\n* **Client-Server Architecture:** Centralised Active Directory servers, databases, and library servers hosted at the main campus are queried collectively by clients (students, faculty) across all campuses.\n* **Wireless Bridging:** In cases with line-of-sight across parts of the city without easy cable routing, microwave or laser wireless point-to-point bridging may be utilized.`
            },
            {
              id: 'jan26-q14b',
              marks: 4,
              question: 'Explain the concept of a Client-Server network and provide a real-world example.',
              answer: `**Client-Server Network:** A centralized network architecture where powerful computers (servers) provide specific resources, security, or services, and terminal computers/devices (clients) request these services. Communication is strictly client-initiated.\n**Real-world Example:** **Web Browsing:** Your smartphone's Safari browser (the client) sends an HTTP request to an Amazon server (the server) for product page data. The server processes the request and sends back HTML, which your client browser renders for you.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 4',
        choice1: {
          id: 'jan26-m4-c1',
          subQuestions: [
            {
              id: 'jan26-q15a',
              marks: 5,
              question: 'Discuss the differences between HTML and XHTML. What are the advantages and disadvantages of each?',
              answer: `**HTML (HyperText Markup Language):**\n* Flexible, forgives missing closing tags or uppercase tags. Built on SGML.\n* *Advantages:* Easy to learn, faster to code for beginners, browsers handle errors well.\n* *Disadvantages:* Messy code can lead to cross-browser rendering differences.\n\n**XHTML (Extensible HyperText Markup Language):**\n* Stricter, fully standardized XML-based version of HTML.\n* *Advantages:* Enforces clean, well-formed code (tags MUST be lowercase, properly nested, and closed). Easier for machines and automated scripts to parse consistently.\n* *Disadvantages:* Steeper learning curve; a single syntax error can break page rendering entirely.`
            },
            {
              id: 'jan26-q15b',
              marks: 4,
              question: 'Write a simple HTML code to display a heading and a paragraph.',
              answer: `\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Simple Page</title>\n</head>\n<body>\n  <h1>Welcome to the Page</h1>\n  <p>This is a paragraph displayed below the heading.</p>\n</body>\n</html>\n\`\`\``
            }
          ]
        },
        choice2: {
          id: 'jan26-m4-c2',
          subQuestions: [
            {
              id: 'jan26-q16a',
              marks: 5,
              question: 'A university website needs to display a dynamic countdown timer for an upcoming event. Explain how JavaScript can be used to achieve this, with a sample script.',
              answer: `**Explanation:** We use JavaScript's \`setInterval\` method to execute a block of code every second. Inside this block, we calculate the difference between the target date and the current date (\`new Date()\`), convert that difference into days, hours, minutes, and seconds, and inject it into the HTML.\n\n**Sample Script:**\n\`\`\`javascript\nlet eventDate = new Date("Dec 1, 2026 09:00:00").getTime();\nlet timer = setInterval(function() {\n  let now = new Date().getTime();\n  let timeleft = eventDate - now;\n  \n  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));\n  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n  \n  document.getElementById("countdown").innerHTML = days + "d " + hours + "h";\n  \n  if (timeleft < 0) {\n    clearInterval(timer);\n    document.getElementById("countdown").innerHTML = "Event Started";\n  }\n}, 1000);\n\`\`\``
            },
            {
              id: 'jan26-q16b',
              marks: 4,
              question: 'Illustrate the different ways in which style sheets can be applied to a web page with simple examples.',
              answer: `**1. Inline CSS** (direct style attribute):\n\`<p style="color: blue;">Inline Text</p>\`\n\n**2. Internal CSS** (within \`<style>\` block in \`<head>\`):\n\`\`\`html\n<style>\n  p { color: red; }\n</style>\n\`\`\`\n\n**3. External CSS** (linking a separate \`.css\` file):\n\`<link rel="stylesheet" href="styles.css">\``
            }
          ]
        }
      }
    ]
  },
  {
    paperId: 'model_qp',
    paperTitle: 'Model Question Paper',
    partA: [
      {
        id: 'mqp-a1',
        marks: 3,
        question: 'Explain the boot process of a computer.',
        answer: `The boot process involves:\n1. **Power-On Self-Test (POST):** When power is switched on, the BIOS/UEFI firmware stored in ROM is executed. It performs POST — checking CPU, RAM, keyboard, and other hardware for faults. If POST fails, the system halts with beep codes.\n2. **Bootloader Activation:** If POST passes, BIOS reads the Master Boot Record (MBR) or UEFI partition table to locate the bootloader. The bootloader is loaded into RAM.\n3. **Kernel Initialization:** The bootloader loads the OS kernel into RAM. The kernel initialises device drivers, mounts the file system, and starts system services/daemons.\n4. **User Session Launch:** The OS presents the login screen or GUI desktop, completing the boot sequence.`
      },
      {
        id: 'mqp-a2',
        marks: 3,
        question: 'Describe how the cache memory can enhance the performance of the CPU in a program execution environment.',
        answer: `* **What is cache?** Cache is a small, ultra-fast SRAM memory placed between the CPU and main RAM. Modern CPUs have L1 (fastest, ~32 KB), L2 (~256 KB), and L3 (~8 MB) caches.\n* **Temporal Locality:** Instructions or data recently used are stored in cache, so the CPU finds them immediately on the next access without going to slow RAM.\n* **Spatial Locality:** Neighbouring memory blocks are pre-fetched into cache, because programs tend to access nearby addresses sequentially.\n* **Speed gain:** Cache access time is 1–5 ns vs 60–100 ns for RAM. A cache hit means the CPU avoids a costly RAM fetch, dramatically reducing latency.`
      },
      {
        id: 'mqp-a3',
        marks: 3,
        question: 'Why is Unicode encoding better than ASCII? Is ASCII still important? Justify.',
        answer: `* **Unicode advantages:** Uses variable-width encoding (UTF-8, UTF-16, UTF-32). UTF-8 is backward compatible with ASCII and can encode over 1.1 million code points — covering all world scripts, emoji, mathematical symbols. Example: Malayalam 'അ', emoji '😀'.\n* **ASCII limitations:** ASCII uses 7 bits, supporting only 128 characters (printable English letters, digits, punctuation), sufficient for English but inadequate for global applications.\n* **Is ASCII still relevant?** Yes — ASCII remains the foundation of computing. All ASCII code points are identical in UTF-8. It is still used in protocols (HTTP headers, email), configuration files, and systems where only English text is needed.`
      },
      {
        id: 'mqp-a4',
        marks: 3,
        question: 'Explain how a CPU executes an arithmetic operation (e.g., addition of two numbers) using the fetch-execute cycle.',
        answer: `1. **Fetch:** The Program Counter (PC) holds the address of the next instruction. The Control Unit sends this address on the address bus; the instruction is read from RAM into the Instruction Register (IR). PC is then incremented.\n2. **Decode:** The Control Unit decodes the opcode in IR (e.g., ADD R1, R2). It identifies the operation type and the source/destination registers.\n3. **Execute:** Operands from R1 and R2 are sent to the ALU. The ALU performs binary addition and places the result in the destination register (e.g., R3). Status flags (Zero, Carry, Overflow) are updated.\n4. **Write-back:** If the result must be stored in memory, it is written back via the data bus.`
      },
      {
        id: 'mqp-a5',
        marks: 3,
        question: 'Consider a mutli-office company with each office site seperated by a few hundred kilometers. The offices are equipped with a network of computers. Explain the possible type of networking technolologies involved in the communication between any two computers of the company.',
        answer: `* **LAN at each office:** Within each office, computers are connected via a Local Area Network (Ethernet or Wi-Fi) for internal file sharing.\n* **WAN between offices:** Offices hundreds of km apart are connected via a Wide Area Network. Technologies include MPLS (leased lines), broadband VPN tunnels, or SD-WAN.\n* **VPN:** A Virtual Private Network encrypts traffic between offices over the public Internet, creating a secure private tunnel. Cost-effective alternative to leased lines.`
      },
      {
        id: 'mqp-a6',
        marks: 3,
        question: 'Is WWW same as the Internet? Justify.',
        answer: `* **Internet:** The Internet is the global physical network infrastructure — millions of routers, switches, fibre cables connecting billions of devices. It supports many services: email, FTP, VoIP, and the Web.\n* **WWW (World Wide Web):** The Web is ONE service that runs ON TOP of the Internet. It consists of interlinked hypertext documents accessed via browsers using HTTP/HTTPS.\n* **Conclusion:** WWW != Internet. The Internet is the infrastructure (the roads); WWW is an application layer service built upon it (the delivery trucks).`
      },
      {
        id: 'mqp-a7',
        marks: 3,
        question: 'Write a simple HTML code to display a heading and a paragraph.',
        answer: `\`\`\`html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Welcome to Foundations of Computing</h1>\n  <p>This course covers hardware, networking, and web design.</p>\n</body>\n</html>\n\`\`\``
      },
      {
        id: 'mqp-a8',
        marks: 3,
        question: 'In what situations would JavaScript be more useful than HTML and CSS alone? Provide an example.',
        answer: `* **HTML and CSS** are static — they define structure and presentation but cannot respond to user actions or change content dynamically after the page loads.\n* **JavaScript** adds behaviour and interactivity: (1) Form validation, (2) Dynamic content (clocks), (3) Event handling (clicks), (4) Animations and AJAX.\n\n*Example:* Showing the current time on button click:\n\`\`\`html\n<button onclick="document.getElementById('out').innerHTML = new Date();">\n  Show Time\n</button>\n<p id="out"></p>\n\`\`\``
      }
    ],
    partBChoices: [
      {
        moduleTitle: 'Module 1',
        choice1: {
          id: 'mqp-m1-c1',
          subQuestions: [
            {
              id: 'mqp-q9a',
              marks: 5,
              question: 'Explain the memory hierarchy in a computer system with a labeled diagram and examples.',
              answer: `**Concept:** Memory hierarchy organises storage from fastest-smallest-expensive (top) to slowest-largest-cheap (bottom).\n\n**Levels of Hierarchy:**\n1. **Level 0 — CPU Registers:** Tiny (32–64 bit) storage inside the CPU. Access time: <1 ns. Example: EAX, EBX in x86.\n2. **Level 1 — Cache (L1/L2/L3):** SRAM on or near the CPU die.\n3. **Level 2 — Main Memory (RAM):** DRAM, GBs in size, holds the active OS.\n4. **Level 3 — Secondary Storage (SSD/HDD):** Non-volatile, TBs, millisecond access.\n5. **Virtual Memory:** Uses part of the SSD/HDD as an extension of RAM.`
            },
            {
              id: 'mqp-q9b',
              marks: 4,
              question: 'What are the advantages of using SSDs over HDDs for data storage?',
              answer: `* **Speed:** SSDs use NAND flash with no moving parts — sequential read up to 550 MB/s (SATA) or 7000 MB/s (NVMe) vs ~150 MB/s for HDD.\n* **Access time:** SSD random access ~0.1 ms vs HDD ~10 ms.\n* **Durability:** No mechanical parts means SSDs withstand shock, vibration, and drops much better.\n* **Silent operation:** No spinning platters or moving heads — completely silent.\n* **Power efficiency:** SSDs consume less power.`
            }
          ]
        },
        choice2: {
          id: 'mqp-m1-c2',
          subQuestions: [
            {
              id: 'mqp-q10a',
              marks: 6,
              question: 'Draw a diagram to show the components of a motherboard. Explain the role of any three components in enabling effective system performance.',
              answer: `**Major components on a motherboard:** CPU socket, RAM slots (DIMM), chipset, PCIe slots, SATA connectors, M.2 slot, ROM chip.\n\n**Roles of three key components:**\n1. **CPU Socket:** Physically mounts and electrically connects the processor to the board. A high-quality socket with good power delivery ensures the CPU can boost to its maximum frequency reliably.\n2. **RAM Slots (DIMM):** Hold DDR4/DDR5 memory modules. Dual-channel configurations double memory bandwidth, reducing bottlenecks for CPU-intensive workloads.\n3. **PCH / Chipset:** Acts as the traffic controller between CPU, RAM, storage, USB, PCIe devices. Manages I/O bandwidth allocation.`
            },
            {
              id: 'mqp-q10b',
              marks: 3,
              question: 'Explain the role of buses in data communication.',
              answer: `**Definition:** A bus is a set of parallel conductors (wires/traces on PCB) that carry data, addresses, and control signals between computer components.\n* **Data Bus:** Carries the actual data being transferred.\n* **Address Bus:** Carries the memory address specifying the source or destination of data.\n* **Control Bus:** Carries control signals (Read/Write, Interrupt, Clock) that co-ordinate operations.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 2',
        choice1: {
          id: 'mqp-m2-c1',
          subQuestions: [
            {
              id: 'mqp-q11a',
              marks: 5,
              question: 'Illustrate the addition of two 4 bit binary numbers. Explain the process step by step.',
              answer: `**Example: Add 0101 (5) and 0011 (3). Expected result: 1000 (8).**\n\n* **Step 1 — Bit 0 (LSB):** 1 + 1 = 10 -> sum bit = 0, carry = 1\n* **Step 2 — Bit 1:** 0 + 1 + carry(1) = 10 -> sum bit = 0, carry = 1\n* **Step 3 — Bit 2:** 1 + 0 + carry(1) = 10 -> sum bit = 0, carry = 1\n* **Step 4 — Bit 3 (MSB):** 0 + 0 + carry(1) = 01 -> sum bit = 1, carry = 0\n\n**Result:** 1000 (binary) = 8 (decimal). The carry-out from bit 3 is 0, so no overflow.`
            },
            {
              id: 'mqp-q11b',
              marks: 4,
              question: '(i) Explain the function of the Control Unit within a CPU. (ii) Describe the function of an instruction set and explain how it facilitates software – hardware interaction.',
              answer: `* **(i) Control Unit:** Directs the operation of the processor. It coordinates the fetch-decode-execute cycle. It reads instructions from the instruction register, decodes them, and sends control signals to the ALU and memory to execute the instruction.\n* **(ii) Instruction Set (ISA):** The complete set of machine-level instructions that a CPU can execute. It facilitates software-hardware interaction by acting as the contract between hardware designers and software compilers. High-level code (C, Java) is compiled into these specific ISA instructions, which the CPU's hardwired circuits physically execute directly.`
            }
          ]
        },
        choice2: {
          id: 'mqp-m2-c2',
          subQuestions: [
            {
              id: 'mqp-q12a',
              marks: 5,
              question: 'A new character encoding system is being developed for a multilingual application. Explain why Unicode would be preferred over ASCII for such purposes.',
              answer: `* **Scope of characters:** ASCII supports only 128 characters (7-bit), sufficient for English but inadequate for global applications. Unicode (version 15) defines over 149,000 characters spanning 161 scripts — Latin, Arabic, Devanagari, CJK ideographs, and emoji.\n* **UTF-8 encoding:** The most common Unicode encoding. fully backward compatible with ASCII. Uses 1 byte for ASCII-compatible characters, 2–4 bytes for others.\n* **Internationalisation (i18n):** Multilingual apps must display user interfaces, store user data, and process input in any language. Unicode provides a single unified standard, eliminating the need for multiple encoding systems.`
            },
            {
              id: 'mqp-q12b',
              marks: 4,
              question: 'How does a computer represent the integer -12(negative 12) using 8-bit 2\'s complement notation? Show the steps involved in the conversion. Also, state the number of bits required to represent a value of 255 in binary.',
              answer: `**Steps to represent -12:**\n1. Find binary for positive 12: \`0000 1100\`\n2. Perform 1's complement (invert the bits): \`1111 0011\`\n3. Add 1 (2's complement): \`1111 0011 + 1 = 1111 0100\`\nResult: \`-12\` is represented as \`1111 0100\` in 8-bit 2's complement.\n\n**Representing 255:**\nTo represent the number 255 in binary (\`1111 1111\`), **8 bits** are required.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 3',
        choice1: {
          id: 'mqp-m3-c1',
          subQuestions: [
            {
              id: 'mqp-q13a',
              marks: 5,
              question: 'A company has multiple offices in different cities and requires seamless data sharing. Compare the suitability of client-server and peer-to-peer networks for this purpose, and recommend the better option.',
              answer: `* **Client-Server Network:** A dedicated server provides resources/services; clients request them. The server handles authentication, access control, storage, and backups centrally.\n  * *Advantages:* Centralised security, easy to scale, reliable data backup, audit logging.\n  * *Disadvantages:* Higher cost (server hardware), single point of failure (if not redundant).\n* **Peer-to-Peer (P2P) Network:** Each device acts as both client and server.\n  * *Advantages:* Low cost, easy to set up for small groups.\n  * *Disadvantages:* Decentralised security, difficult to scale, hard to manage.\n* **Recommendation:** Client-Server is far better for a multi-city company due to centralized management, reliable backups, and consistent security features.`
            },
            {
              id: 'mqp-q13b',
              marks: 4,
              question: 'Give the Linux commands for the following operations: (i) Create a directory (ii) List all the files and sub folders in a directory (iii) Copy the contents of a text file (iv) Change the access permissions of files and directories.',
              answer: `* **(i) Create a directory:** \`mkdir\` (e.g., \`mkdir reports\`)\n* **(ii) List files and subfolders:** \`ls -la\` (lists all including hidden, with long format showing permissions)\n* **(iii) Copy contents:** \`cp\` (e.g., \`cp file.txt backup/\`)\n* **(iv) Change access permissions:** \`chmod\` (e.g., \`chmod 755 script.sh\`)`
            }
          ]
        },
        choice2: {
          id: 'mqp-m3-c2',
          subQuestions: [
            {
              id: 'mqp-q14a',
              marks: 5,
              question: 'A startup is expanding its business and needs to implement network security. Propose a security plan that includes desktop security, perimeter security, and VPN for remote access.',
              answer: `* **Desktop Security:** (1) Install antivirus/anti-malware on all endpoints. (2) Enable OS auto-updates and patch management. (3) Enforce strong password policies and multi-factor authentication (MFA). (4) Use disk encryption (BitLocker) for stolen laptops.\n* **Perimeter Security:** (1) Deploy a Next-Generation Firewall (NGFW) at the network boundary to inspect traffic. (2) Set up a DMZ for public-facing servers. (3) Use Intrusion Detection/Prevention Systems (IDS/IPS). (4) Implement DNS filtering.\n* **VPN for Remote Access:** Deploy a VPN gateway (e.g., OpenVPN) that remote employees connect to before accessing internal systems. All traffic is encrypted (AES-256). Require MFA for VPN login.`
            },
            {
              id: 'mqp-q14b',
              marks: 4,
              question: 'Answer the following: (i) Explain the concept of a Client-Server network and provide a real-world example. (ii) Explain the role of DNS in internet communication.',
              answer: `**Client-Server Network:** A network model where one or more powerful computers (servers) provide services, and many other computers (clients) consume those services. Communication is always client-initiated.\n* **Real-world example — Web browsing:** Your browser (client) sends an HTTP GET request to Google's web server. Google's server processes the request and sends back HTML/CSS/JS.\n\n**Role of DNS:**\n* DNS (Domain Name System) is the internet's phonebook. Humans use domain names (\`google.com\`); computers communicate using IP addresses (\`142.250.77.46\`). DNS translates domain names to IPs.\n* **Why DNS matters:** Without DNS, users would have to memorise IP addresses for every website. DNS also enables load balancing and failover.`
            }
          ]
        }
      },
      {
        moduleTitle: 'Module 4',
        choice1: {
          id: 'mqp-m4-c1',
          subQuestions: [
            {
              id: 'mqp-q15a',
              marks: 6,
              question: 'Design a webpage using HTML and CSS for an online bookstore. Include a title, a heading, a list of book categories, and a basic style.',
              answer: `\`\`\`html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>BookNook Online Bookstore</title>\n  <style>\n    body { font-family: sans-serif; background-color: #f4f4f9; padding: 20px; }\n    header { background-color: #2c3e50; color: white; padding: 15px; text-align: center; }\n    ul { list-style-type: square; color: #333; margin-top: 20px; }\n    li { padding: 5px 0; }\n    .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <div class="container">\n    <header>\n      <h1>Welcome to BookNook</h1>\n    </header>\n    <h2>Book Categories</h2>\n    <ul>\n      <li>Science Fiction & Fantasy</li>\n      <li>Mystery & Thriller</li>\n      <li>Biography & Autobiography</li>\n      <li>Computers & Technology</li>\n    </ul>\n  </div>\n</body>\n</html>\n\`\`\``
            },
            {
              id: 'mqp-q15b',
              marks: 3,
              question: 'Inspect the following XHTML and make the necessary corrections required, if any:\n<!DOCTYPE html>\n<html xmlns="https://ktu.edu.in/">\n<head> \n</head>\n<BODY> \n<b><i>Some text</b></i>\n<P>This is a paragraph</P>\n<a HREF="https://www.ktu.edu.in/">Visit our university website</a>\n</BODY>',
              answer: `Original errors corrected:\n1. Improper tag nesting: \`<b><i>Some text</b></i>\` — inner \`<i>\` tag must close before outer \`<b>\`.\n2. Uppercase tags: \`<BODY>\`, \`<P>\` — XHTML requires all element names to be lowercase.\n3. Uppercase attribute: \`HREF\` — XHTML requires lowercase attributes.\n\n**Corrected XHTML:**\n\`\`\`xml\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head></head>\n<body>\n  <b><i>Some text</i></b>\n  <p>This is a paragraph</p>\n  <a href="https://www.ktu.edu.in/">Visit our university website</a>\n</body>\n</html>\n\`\`\``
            }
          ]
        },
        choice2: {
          id: 'mqp-m4-c2',
          subQuestions: [
            {
              id: 'mqp-q16a',
              marks: 6,
              question: 'A university website needs to display a dynamic countdown timer for an upcoming event. Explain how JavaScript can be used to achieve this, with a sample script.',
              answer: `**Approach:** JavaScript's \`setInterval()\` function repeatedly executes a callback every 1000 ms. On each call, the current time is subtracted from the event date to compute remaining days, hours, minutes, and seconds.\n\n\`\`\`html\n<div id="timer">Loading...</div>\n<script>\n  const eventDate = new Date('2025-12-01T09:00:00').getTime();\n  \n  function updateCountdown() {\n    const now = new Date().getTime();\n    const diff = eventDate - now;\n    \n    if (diff <= 0) {\n      document.getElementById('timer').innerHTML = 'Event has started!';\n      return;\n    }\n    \n    const days = Math.floor(diff / (1000 * 60 * 60 * 24));\n    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\n    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));\n    const seconds = Math.floor((diff % (1000 * 60)) / 1000);\n    \n    document.getElementById('timer').innerHTML = \n      \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;\n  }\n  \n  updateCountdown();\n  setInterval(updateCountdown, 1000);\n</script>\n\`\`\``
            },
            {
              id: 'mqp-q16b',
              marks: 3,
              question: 'Illustrate the different ways in which style sheets can be applied to a web page with simple examples.',
              answer: `**1. Inline CSS:** Style is applied directly to a single HTML element using the \`style\` attribute. Highest specificity.\n\`\`\`html\n<p style="color: red; font-size: 16px;">Inline styled paragraph</p>\n\`\`\`\n\n**2. Internal (Embedded) CSS:** CSS rules are placed inside a \`<style>\` tag in the \`<head>\` section. Applies to that page only.\n\`\`\`html\n<style>\n  p { color: blue; font-size: 14px; }\n</style>\n\`\`\`\n\n**3. External CSS:** CSS rules are written in a separate \`.css\` file and linked using \`<link>\`. Best practice for multi-page websites.\n\`\`\`html\n<!-- In HTMLhead -->\n<link rel="stylesheet" href="styles.css">\n\`\`\``
            }
          ]
        }
      }
    ]
  }
];
