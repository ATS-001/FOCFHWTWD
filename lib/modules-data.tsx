import { Cpu, Binary, Globe, Layout } from 'lucide-react';

export interface DetailPoint {
  title: string;
  description: string;
}

export type VisualType = 'pyramid' | 'flow' | 'grid-disks' | 'box-model' | 'layers' | 'stack' | 'topologies' | 'none';

export interface Topic {
  name: string;
  summary: string;
  content: string; // The full textbook content
  details: DetailPoint[];
  examFocus: string[];
  visual?: {
    type: VisualType;
    data: any;
  };
}

export interface Module {
  id: number;
  title: string;
  icon: any;
  topics: Topic[];
}

export const MODULES_DATA: Module[] = [
  {
    id: 1,
    title: 'Computer Hardware',
    icon: Cpu,
    topics: [
      { 
        name: 'Central Processing Unit', 
        summary: 'The technical brain of the system, responsible for arithmetic, logical, and control operations.',
        content: `The **Central Processing Unit (CPU)** is the engine that drives the entire computer system. It is often referred to as the "brain" because it performs the actual data processing, manipulation, and calculations that turn raw data into useful information. 

### Von Neumann Architecture
Most modern CPUs are built upon the **Von Neumann Architecture**, characterized by a single shared memory for both programs (instructions) and data. This design allows the computer to be flexible, as it can change its behavior simply by loading a different program into memory.

### Internal Components
- **Arithmetic Logic Unit (ALU)**: This is where "processing" actually happens. It performs two types of operations:
    1. **Arithmetic**: Addition, subtraction, multiplication, and division.
    2. **Logical**: Comparison of values (e.g., $A > B$) and bitwise logic like AND, OR, NOT, and XOR.
- **Control Unit (CU)**: The manager of the CPU. It handles processor control signals, directs the flow of data between different parts of the computer (CPU, memory, I/O), and manages the instruction cycle.
- **Registers**: These are extremely fast, small storage locations built directly into the processor to hold data temporarily during execution. 
    - **Accumulator (ACC)**: Stores the intermediate result of calculations.
    - **Instruction Register (IR)**: Holds the current instruction being executed.
    - **Program Counter (PC)**: Tracks the address of the next instruction to be fetched.
    - **Memory Address Register (MAR)** and **Memory Data Register (MDR)**: Faciliate communication with RAM.
- **System Clock**: Generates pulses at a fixed rate (measured in GHz) to synchronize all internal operations.

### Classification and Performance
CPUs are classified by their number of **cores**—independent processing units.
- **Single-Core**: One instruction at a time; struggles with heavy multitasking.
- **Dual-Core / Multi-Core**: Multiple units (Quad, Hexa, Octa-core) that can handle multiple tasks simultaneously, significantly improving system responsiveness.

Performance is further optimized in modern systems through **Specialized CPUs**:
- **GPUs (Graphics Processing Units)**: Optimized for parallel computations needed for imagery and 3D rendering.
- **TPUs (Tensor Processing Units)**: Specifically designed for high-throughput machine learning tasks.`,
        visual: {
          type: 'flow',
          data: ['Instruction Fetch', 'Opcode Decode', 'ALU Execution', 'Result Storage']
        },
        examFocus: [
          'Detailed sequence of events during CPU instruction execution.',
          'Function of ALU, CU, and Registers (PC, IR, ACC).',
          'CPU Performance metrics (Clock speed, Cores, Threads).'
        ],
        details: [
          { title: 'Arithmetic Logic Unit (ALU)', description: 'Performs arithmetic (ADD, SUB, MUL, DIV) and logical (AND, OR, NOT, XOR) operations. Works directly with data from registers.' },
          { title: 'Control Unit (CU)', description: 'Directs and coordinates activities. Decodes instructions and sends control signals to ALU, memory, and I/O components.' },
          { title: 'Internal Registers', description: 'Small, high-speed storage. Accumulator (ACC) for results, Instruction Register (IR) for current command, and Program Counter (PC) for next instruction address.' },
          { title: 'Core Classification', description: 'Single-Core (one unit), Dual-Core (two units), and Multi-Core (Quad, Hexa, Octa). Multi-core allows simultaneous task handling.' }
        ]
      },
      { 
        name: 'Memory Hierarchy Design', 
        summary: 'A structured arrangement of storage types balancing speed, cost, and volatility.',
        content: `In computer design, no single storage medium can be infinitely large, infinitely fast, and infinitely cheap. To solve this, engineers use a **Memory Hierarchy**, a pyramid logic that places fast, expensive memory close to the CPU and larger, slower, cheaper memory further away.

### The Hierarchical Layers
- **L0: CPU Registers**: Fastest access (nanoseconds) but very limited capacity (Bytes to KB).
- **L1/L2/L3: Cache Memory**: Built using **SRAM (Static RAM)**. It stores copies of frequently used data from main memory to reduce latency. L1 is the smallest and fastest; L3 is larger and often shared across CPU cores.
- **L4: Main Memory (RAM)**: The workstation of the computer. Modern systems typically use **DRAM (Dynamic RAM)**, which is dense and affordable but volatile and needs constant refreshing.
- **L5: Secondary Storage**: Long-term storage like **HDD** or **SSD**. Non-volatile; data remains after power is lost.
- **L6: Tertiary Storage**: Archival storage like Magnetic Tapes or Cloud backups.

### SRAM vs DRAM
- **SRAM (Static RAM)**: Faster, more expensive, used for Cache. It uses flip-flops to hold bits and does not require periodic refreshing.
- **DRAM (Dynamic RAM)**: Slower, cheaper, used for Main Memory. It uses capacitors that leak charge, hence it requires thousands of refresh cycles per second to retain data.

### Virtual Memory
When the computer runs out of physical RAM, it uses **Virtual Memory**, a management technique that trick the system into thinking it has more RAM by using the hard drive as an extension. 
- It uses **Paging** where memory is divided into fixed-size blocks. 
- A **Page Table** maps virtual addresses to physical ones. 
- A **Page Fault** occurs when requested data is not in RAM, forcing the OS to swap it in from the disk (Swap Space).`,
        visual: {
          type: 'pyramid',
          data: [
            { label: 'Registers', color: 'bg-red-500' },
            { label: 'Cache (SRAM)', color: 'bg-orange-500' },
            { label: 'Main Memory (DRAM)', color: 'bg-yellow-500' },
            { label: 'Secondary (HDD/SSD)', color: 'bg-green-500' },
            { label: 'Archive (Tape/Cloud)', color: 'bg-blue-500' }
          ]
        },
        examFocus: [
          'Hierarchy levels from registers to secondary storage.',
          'Advantages of SSD over HDD.',
          'Difference between SRAM (Cache) and DRAM (Main Memory).',
          'Virtual memory and usage of swap space/page faults.'
        ],
        details: [
          { title: 'Primary Memory (RAM/ROM)', description: 'RAM (Random Access): Volatile, fast, used for active programs. ROM (Read Only): Non-volatile, used for firmware/BIOS.' },
          { title: 'SRAM vs DRAM', description: 'SRAM: Built with flip-flops, no refresh needed, used for Cache. DRAM: Built with capacitors, needs constant refresh, used for Main Memory.' },
          { title: 'Level Structure (L0 - L6)', description: 'L0: CPU Registers (ns) | L1-L3: Cache (SRAM) | L4: Main Memory (DRAM) | L5: Secondary (HDD/SSD) | L6: Tertiary (Tape/Cloud).' },
          { title: 'Virtual Memory', description: 'A memory management technique that uses secondary storage to simulate larger contiguous RAM. Handles "Page Faults" via demand paging.' }
        ]
      },
      { 
        name: 'Storage & RAID Technology', 
        summary: 'Non-volatile data persistence solutions comparing mechanical HDDs and flash-based SSDs.',
        content: `Mass storage is essential for holding the OS, applications, and your files permanently.

### Hard Disk Drives (HDD)
HDDs are traditional mechanical storage devices.
- **Internals**: They consist of spinning circular disks called **Platters**. A magnetic **Read/Write Head** hovers over the surface to access data.
- **Structure**: Data is organized into **Tracks** (concentric circles) and **Sectors** (the smallest units of readable data). A **Cylinder** represents the same track number across all platters.
- **Latency**: Performance is hindered by **Seek Time** (moving the arm) and **Rotational Latency** (waiting for the platter to rotate).

### Solid State Drives (SSD)
Modern SSDs have no moving parts, making them faster, quieter, and more robust.
- **Technology**: They use **NAND Flash Memory** with floating-gate transistors.
- **Management**: An internal **Controller** acts as the brain, handling data mapping.
- **Garbage Collection**: SSDs cannot overwrite data directly. They must erase blocks before writing, involving a background process called garbage collection to reclaim invalid pages.

### RAID (Redundant Array of Independent Disks)
RAID groups multiple physical disks to improve reliability or speed:
- **RAID 0 (Striping)**: Splits data across disks for speed. If one disk fails, ALL data is lost.
- **RAID 1 (Mirroring)**: Copies data to two disks for safety. Half the storage is usable.
- **RAID 5 (Parity)**: Balance of speed and safety. Uses parity information to rebuild data if one disk fails.
- **RAID 10**: Combines mirroring and striping for top performance and safety.`,
        visual: {
          type: 'grid-disks',
          data: { title: 'Secondary Storage Architectures', layout: 'Magnetic HDD | Solid State SSD | Optical CD/DVD | Magnetic Tape' }
        },
        examFocus: [
          'Characteristics of RAID levels (0, 1, 5, 10).',
          'Striping vs Mirroring concept.',
          'NAND flash memory used in SSDs.'
        ],
        details: [
          { title: 'SSD Components', description: 'NAND Flash Memory Chips (Floating gate transistors) and SSD Controller (the brain). DRAM Cache is often used for mapping speed.' },
          { title: 'RAID 0, 1, 5', description: 'RAID 0 (Striping): Speed focus. RAID 1 (Mirroring): Redundancy focus. RAID 5 (Parity): Balance of speed and data safety.' },
          { title: 'RAID 10 (1+0)', description: 'Combines mirroring and striping. High performance and excellent fault tolerance (Safe if one disk in each pair fails).' },
          { title: 'Optical Disks', description: 'Uses laser technology (pits and lands). CD (~700MB), DVD (4.7-8.5GB), Blu-ray (25-100GB). Increasingly obsolete due to Cloud/USB.' }
        ]
      },
      { 
        name: 'The Motherboard & I/O', 
        summary: 'The connection hub for all internal components and external peripherals.',
        content: `The **Motherboard** is the central printed circuit board that connects the CPU, memory, storage, and all other peripherals.

### Key Components
- **CPU Socket**: Holds the processor. 
- **Chipset**: Manages the flow of data. Traditionally split into **Northbridge** (RAM/Graphics) and **Southbridge** (USB/SATA/Audio). Modern CPUs often integrate these tasks.
- **Expansion Slots**: **PCI Express (PCIe)** slots allow adding hardware like Graphics Cards ($x16$) or Network Cards ($x1$).
- **BIOS/UEFI Chip**: Firmware that starts the computer, performs the **POST (Power-On Self-Test)**, and loads the kernel.
- **CMOS Battery**: Powers the internal clock and retains BIOS settings.

### I/O Communication Methods
How the CPU talks to devices:
1. **Programmed I/O (PIO)**: CPU constantly checks (polls) the device status. Very inefficient and CPU-intensive.
2. **Interrupt-Driven I/O**: The device signals (interrupts) the CPU when it is ready. Better CPU utilization.
3. **Direct Memory Access (DMA)**: A separate controller moves data directly between RAM and devices, bypassing the CPU. Best for high-speed bulk transfers (e.g., HDD/SSD to RAM).

### Form Factors
Motherboards come in standard sizes like **ATX** (full size), **Micro-ATX** (compact), and **Mini-ITX** (tiny), determining the case and expansion capabilities.`,
        visual: {
          type: 'layers',
          data: ['User Interaction', 'OS Kernel', 'Device Drivers', 'Hardware Control']
        },
        examFocus: [
          'Difference between Parallel Bus and Serial Bus.',
          'Motherboard components and form factors (ATX, ITX).',
          'Boot process and Role of POST/BIOS.',
          'Methods of I/O (Programmed, Interrupt, DMA).'
        ],
        details: [
          { title: 'System Buses', description: 'Address Bus (Where?), Data Bus (What?), and Control Bus (How?). Width determines bandwidth and addressable memory.' },
          { title: 'Form Factors', description: 'Standard-ATX (305x244mm), Micro-ATX (244x244mm), Mini-ITX (170x170mm). Nano/Pico-ITX used for IoT/Automation.' },
          { title: 'Firmware & BIOS', description: 'Firmware: Embedded software in ROM. BIOS/UEFI: Initializes hardware during POST (Power-On Self-Test) and loads the Bootloader.' },
          { title: 'Methods of I/O', description: 'Programmed I/O (CPU polls), Interrupt-Driven I/O (Device signals CPU), DMA (Direct Memory Access - bypasses CPU for bulk transfer).' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Foundations of Computing',
    icon: Binary,
    topics: [
      { 
        name: 'Number Systems & Representations', 
        summary: 'How computers store integers and symbols using binary logic and complementary systems.',
        content: `Computers represent all data (numbers, text, images) as binary digits (**bits**).

### Number Systems
- **Binary (Base-2)**: Digits 0, 1.
- **Octal (Base-8)**: Digits 0-7. Used as a shorthand for 3-bit binary groups.
- **Hexadecimal (Base-16)**: Digits 0-9 and A-F. Shorthand for 4-bit groups.

### Integer Representation
- **Unsigned**: Magnitude only, represents positive numbers.
- **Signed**: To represent negative numbers, we use:
    1. **Sign-Magnitude**: Leftmost bit is the sign (0:+, 1:-). Inefficient due to "Double Zero."
    2. **1\'s Complement**: Flipped bits.
    3. **2\'s Complement**: Flip bits and add 1. This is the industry standard because it allows subtraction via addition ($A - B = A + \text{negate}(B)$) and has a unique zero.

### Character Encoding
- **ASCII**: 7-bit standard for English characters ($128$ codes).
- **Unicode**: Modern global standard ($16/32$-bit). **UTF-16** can represent over a million symbols, supporting diverse languages and symbols like emojis. It is a superset of ASCII.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Calculations for 2\'s complement negation.',
          'Range of values for N-bit signed vs unsigned integers.',
          'Differences between ASCII and Unicode (UTF-16).',
          'Concept of BCD and why it is used.'
        ],
        details: [
          { title: 'Calculating 2\'s Complement', description: 'Step 1: Write positive binary. Step 2: Invert all bits (0↔1). Step 3: Add 1 to the result.' },
          { title: 'The Double Zero Problem', description: 'Sign-Magnitude leads to two encodings for zero, complicating logic. 2\'s complement solves this.' },
          { title: 'Data Units', description: 'Bit (0/1), Byte (8 bits), Word (32/64 bits depending on architecture).' },
          { title: 'Unicode Popularity', description: 'UTF-16 is common in system internals, while UTF-8 is the standard for web content.' }
        ]
      },
      { 
        name: 'Instruction Set & CPU Architecture', 
        summary: 'The interface between software and hardware, and the stages of instruction execution.',
        content: `An **Instruction Set Architecture (ISA)** is the set of basic commands a CPU understands.

### Components of an Instruction
1. **Opcode (Operation Code)**: Tells the CPU what to do (e.g., ADD, SUB, MOV).
2. **Operands**: Tells where the data is or provide raw values.
3. **Addressing Mode**: Defines how operands are accessed (Immediate, Register, Direct, Indirect, Indexed).

### ISA Philosophies
- **CISC (Complex Instruction Set Computing)**: Large, complex instruction set. High execution complexity but shorter program code (e.g., Intel x86).
- **RISC (Reduced Instruction Set Computing)**: Minimal, simple instructions. Faster execution per cycle but longer program code (e.g., ARM, used in smartphones).

### The Instruction Cycle (Fetch-Decode-Execute)
Every command goes through these steps:
1. **Fetch**: The PC sends the address to the MAR. RAM sends the instruction to the IR. PC increments.
2. **Decode**: The Control Unit interprets the bits in the IR.
3. **Execute**: The ALU performs the operation using data from registers.
4. **Store**: Results are written back to a register or RAM.`,
        visual: {
          type: 'stack',
          data: ['Opcode (Operation)', 'Operand 1 (Source)', 'Operand 2 (Destination)', 'Condition Flags']
        },
        examFocus: [
          'Differences between CISC and RISC architectures.',
          'Types of addressing modes and their technical usage.',
          'Structure of an instruction: Opcode vs Operands.',
          'The exact sequence of the Fetch-Decode-Execute cycle.'
        ],
        details: [
          { title: 'Opcode', description: 'The unique binary code that identifies a specific operation like Addition or Jump.' },
          { title: 'Immediate Addressing', description: 'The fastest mode because the data is hard-coded into the instruction itself.' },
          { title: 'CISC vs RISC', description: 'CISC targets code density; RISC targets execution speed and power efficiency.' },
          { title: 'Fetch Phase', description: 'The Program Counter (PC) provides the location; RAM provides the data; Instruction Register (IR) holds it.' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Software & Networks',
    icon: Globe,
    topics: [
      { 
        name: 'Operating System Services', 
        summary: 'The system software that manages hardware and provides services for applications.',
        content: `The **Operating System (OS)** acts as a mediator between the user/applications and the computer hardware.

### Core OS Services
- **Process Management**: Handles the creation, scheduling, and termination of programs in execution. It uses techniques like **Time-Slicing** for multitasking.
- **Memory Management**: Allocates RAM to processes and ensures a process doesn't overwrite another\'s data. It also manages **Virtual Memory**.
- **File System**: Abstraction of physical storage into directories and files. Manages permissions (Read/Write/Execute).
- **Device Management**: Uses **Device Drivers** to communicate with unique hardware.
- **User Interface**: Provides a way for users to interact, either via **GUI** (Graphical) or **CLI** (Command Line/Terminal).

### Processing Models
- **Interactive**: Real-time human interaction (e.g., PC).
- **Batch Processing**: Running jobs in groups without manual intervention (e.g., payroll).
- **Real-Time (RTOS)**: Used in mission-critical hardware (e.g., medical devices) where timing is absolute.`,
        visual: {
          type: 'layers',
          data: ['Application Layer', 'Operating System', 'Kernel', 'Firmware', 'Hardware']
        },
        examFocus: [
          'Difference between System Software and Application Software.',
          'Core OS services: Memory management, CPU scheduling, I/O control.',
          'Interactive vs Batch processing models.'
        ],
        details: [
          { title: 'Process Management', description: 'Handles the creation, scheduling, and termination of processes. Ensures CPU time is shared fairly.' },
          { title: 'Memory Management', description: 'Coordinates RAM allocation and manages virtual memory using paging and frames.' },
          { title: 'File System Control', description: 'Structures data storage into directories and files. Manages permissions (Read/Write/Execute).' },
          { title: 'Device Management', description: 'Acts as an intermediary between OS and hardware using Device Drivers.' }
        ]
      },
      { 
        name: 'Networks & Topologies', 
        summary: 'How nodes connect and communicate across different scales and layouts.',
        content: `Computing networks allow devices to share data and resources efficiently.

### Scaling Categorization
- **PAN (Personal Area Network)**: Smallest, for one person (e.g., Bluetooth).
- **LAN (Local Area Network)**: Single room or building.
- **MAN (Metropolitan Area Network)**: City-wide.
- **WAN (Wide Area Network)**: Global coverage (The Internet).

### Physical Topologies
- **Star**: Most common. All nodes connect to a central hub/switch. Easy to manage, hub failure is critical.
- **Mesh**: Every node connects to many others. Highly resilient but expensive.
- **Bus**: All nodes share one cable. Simple but vulnerable and slow.
- **Ring**: Circular data flow.

### Communication Modes
- **Simplex**: One-way (TV).
- **Half-Duplex**: Two-way, non-simultaneous (Walkie-talkies).
- **Full-Duplex**: Simultaneous two-way (Phones).`,
        visual: {
          type: 'topologies',
          data: ['Bus (Line)', 'Star (Hub)', 'Ring (Circle)', 'Mesh (All-to-All)']
        },
        examFocus: [
          'Suitability of Client-Server vs Peer-to-Peer networks.',
          'Network topologies comparison (Mesh reliability vs Star management).',
          'Scale categorization: LAN, MAN, WAN, PAN.'
        ],
        details: [
          { title: 'Packet Switching', description: 'Large messages are divided into packets with headers (addressing) and trailers (error checking).' },
          { title: 'Communication Channels', description: 'Simplex (One-Way), Half-Duplex (Two-way non-simultaneous), and Full-Duplex (Simultaneous interaction).' },
          { title: 'LAN vs WAN', description: 'Local (Fast, cheap, private) vs Wide (Global, ISP driven, public).' },
          { title: 'Star Topology', description: 'The standard for modern Ethernet networks due to ease of isolation and central control.' }
        ]
      },
      { 
        name: 'The Internet Architecture', 
        summary: 'Standardized protocols enabling global connectivity and security.',
        content: `The Internet is a massive network of networks using the **TCP/IP** protocol suite.

### Addressing & Infrastructure
- **IP Address**: Unique logical identifier. **IPv4** (32-bit) is old; **IPv6** (128-bit) provides massive address space.
- **DNS (Domain Name System)**: Translates names (google.com) to IPs.
- **DHCP**: Automatically assigns IPs to devices.
- **NAT**: Allows multiple devices in a home or office to share a single public IP.

### Network Security
- **Firewalls**: Filter incoming/outgoing traffic based on rules.
- **VPN (Virtual Private Network)**: Creates an encrypted tunnel over the public internet to hide your IP and secure data.
- **IDS/IPS**: Monitors for intrusion patterns.

### Web-Based Computing
The web works on the **Client-Server model**. 
- The Client (Browser) makes a request. 
- The Web Server (Nginx, Apache) processes it. 
- **CDNs (Content Delivery Networks)** cache files closer to the user to speed up the process.`,
        visual: {
          type: 'stack',
          data: ['HTTP / Web Browsing', 'TCP / Data Integrity', 'IP / Packet Routing', 'Ethernet / Physical Media']
        },
        examFocus: [
          'IPv4 (32-bit decimal) vs IPv6 (128-bit hex).',
          'Mechanism of NAT and DHCP.',
          'DNS resolution process.',
          'Client-Server vs Tiered architecture.'
        ],
        details: [
          { title: 'DNS Resolution', description: 'Converts human-readable names to IP addresses via a distributed database.' },
          { title: 'NAT Protocol', description: 'Network Address Translation. Allows a whole private network to share a single public IP address.' },
          { title: 'VPN Channels', description: 'Uses encryption and IP masking to create a secure path over an insecure network.' },
          { title: 'Web Servers', description: 'Software like Apache or Nginx that listens for HTTP requests and serves site files.' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Modern Web Design',
    icon: Layout,
    topics: [
      { 
        name: 'The Delivery Cycle', 
        summary: 'The sequence of events from URL entry to page rendering.',
        content: `Web design isn't just about code; it's about the delivery system.

### Delivery Lifecycle
1. **Request**: Connection via HTTP/HTTPS. **HTTPS** is critical today for its SSL/TLS encryption.
2. **DNS**: Locating the server.
3. **Fetch**: Retrieving HTML, CSS, and JS files.
4. **CDN**: Speeding up delivery by serving assets from local edge servers.
5. **DOM Build**: The browser renders the page structure.

### Content Types
- **Static**: The same file is sent to every user (fastest).
- **Dynamic**: Servers like PHP or ASP.NET generate custom HTML for each user based on data (e.g., social feed).`,
        visual: {
          type: 'flow',
          data: ['URL Entry', 'DNS Lookup', 'TCP Handshake', 'HTML Transfer', 'DOM Render']
        },
        examFocus: [
          'Components of Web (Server, Client, Content).',
          'Difference between HTTP and HTTPS.',
          'Role of CDNs in content delivery.'
        ],
        details: [
          { title: 'HTTP/HTTPS', description: 'The rules of data exchange. HTTPS adds SSL/TLS for encryption.' },
          { title: 'CDN Distribution', description: 'Edge nodes reduce latency by serving files from locations closer to the client.' },
          { title: 'Static vs Dynamic', description: 'Static is pre-built; Dynamic is generated at runtime based on user data/input.' },
          { title: 'Web Clients', description: 'Web browsers (Chrome, Firefox) that interpret code and render the visual UI.' }
        ]
      },
      { 
        name: 'HTML Structure & Semantics', 
        summary: 'Using markup tags to define meaning and hierarchy in web documents.',
        content: `**HTML (HyperText Markup Language)** defines the structure and meaning of web content.

### Core Markup Concepts
- **Tags**: Keywords in angle brackets (\`<html>, <body>\`). Most come in pairs (start/end).
- **Attributes**: Provide metadata for tags (\`src, href, id, class\`).
- **Semantics**: Tags that describe their content. Use \`<header>, <main>, <nav>, <article>\` instead of generic \`<div>\` tags to help screen readers and search engines.

### Advanced Elements
- **Tables**: Built with \`<table>, <tr>, <th>, <td>\`. Use **colspan** to span columns and **rowspan** for rows.
- **Forms**: Gather user input (\`<input>, <label>, <select>\`). Uses **GET** (visible URL data) or **POST** (hidden body data) methods.

### HTML vs XHTML
**XHTML** is a stricter, XML-compliant version. 
- All tags must be closed.
- Elements must be in lowercase.
- Attribute values must be quoted.`,
        visual: {
          type: 'layers',
          data: ['Document Head', 'Navigation', 'Main Section', 'Nested Elements', 'Footer']
        },
        examFocus: [
          'Differences between HTML and XHTML.',
          'Semantic tags for accessibility (article, aside, nav).',
          'Table merging using colspan and rowspan.'
        ],
        details: [
          { title: 'HTML5 Elements', description: 'Modern semantic tags like <nav>, <article>, and <footer> improve SEO/accessibility.' },
          { title: 'XHTML Strictrness', description: 'Requires closed tags, lowercase names, and quoted attributes for XML compatibility.' },
          { title: 'Forms', description: 'Gather user specific data using input types like Text, Email, Password, and Radio buttons.' },
          { title: 'Table Architecture', description: 'Structured grids for data. colspan (horizontal) and rowspan (vertical) enable complex layouts.' }
        ]
      },
      { 
        name: 'CSS Styling & Box Model', 
        summary: 'The aesthetic rules governing layout, spacing, and responsive design.',
        content: `**CSS (Cascading Style Sheets)** is the language for presentation.

### The CSS Box Model
Every element is a box. Understanding this is key to layout:
1. **Margin**: Space outside the border.
2. **Border**: The edge.
3. **Padding**: Space between the border and content.
4. **Content**: The core bits like text or images.
Use \`box-sizing: border-box\` to ensure padding doesn't increase the total width.

### Modern Layouts
- **Flexbox (1D)**: Best for rows or columns.
- **CSS Grid (2D)**: Best for complex layouts with both rows and columns.
- **Responsive Design**: Uses **Media Queries** (\`@media\`) to change styles based on the device screen size.

### CSS Methods
- **Inline**: Inside the tag (\`style="..."\`). Inefficient.
- **Internal**: Inside \`<style>\` tags in the head.
- **External**: In a separate \`.css\` file (Recommended).`,
        visual: {
          type: 'box-model',
          data: {}
        },
        examFocus: [
          'CSS Box Model layers.',
          'Flexbox vs CSS Grid layout strategies.',
          'Responsive design using Media Queries.'
        ],
        details: [
          { title: 'The Box Model', description: 'Margin (Outer) > Border > Padding (Inner) > Content. Essential for sizing.' },
          { title: 'Flexbox Logic', description: 'One-dimensional model for alignment and distribution of items in rows/columns.' },
          { title: 'CSS Grid', description: 'Two-dimensional model for complex structural layout regions using tracks and areas.' },
          { title: 'Responsive Design', description: 'Uses breakpoints like 768px (Tablet) or 1024px (Desktop) to deliver customized layouts.' }
        ]
      },
      { 
        name: 'JavaScript & Interactivity', 
        summary: 'Programming logic that makes static pages interactive and dynamic.',
        content: `**JavaScript** is the behavior layer of the web.

### Core Language
- **Variables**: \`let\` (mutable) and \`const\` (immutable).
- **Logics**: \`if-else\` statements for branching and loops (\`for, while\`) for repetition.

### DOM Manipulation
The **Document Object Model (DOM)** is a tree of HTML elements that JS can modify.
- **Select**: \`document.getElementById()\` captures an element.
- **Modify**: \`element.innerText = "New Text"\`.
- **Style**: \`element.style.color = "red"\`.

### Event Listeners
JavaScript reacts to user actions via **Event Listeners**:
- \`click\`: Button presses.
- \`mouseover\`: Hovering.
- \`submit\`: Form processing.

Interactivity enables features like pop-up alerts, dynamic search, data validation, and real-time updates without page reloads.`,
        visual: {
          type: 'flow',
          data: ['User Event', 'Event Captured', 'JS Logic Processed', 'DOM UI Updated']
        },
        examFocus: [
          'DOM manipulation techniques (selection/modification).',
          'Handling events and trigger-based behavior.',
          'Variable scope (let vs const) and basic logic structures.'
        ],
        details: [
          { title: 'The DOM Tree', description: 'A structural interface that represents HTML as a tree that scripts can traverse.' },
          { title: 'Event Handlers', description: 'Using addEventListener to catch user interactions like clicks or form submissions.' },
          { title: 'Variable Control', description: 'let and const enable safer, predictable memory usage compared to legacy var.' },
          { title: 'Interactive logic', description: 'Using conditionals and functions to create complex UI behaviors like sliders or tabs.' }
        ]
      }
    ]
  }
];
