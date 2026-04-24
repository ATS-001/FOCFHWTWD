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
        name: 'System Foundations & Architecture', 
        summary: 'Core definitions and the structural logic of the Von Neumann model.',
        content: `### Computer Systems
A computer is an electronic device that processes data according to a set of instructions. It consists of two primary parts:
- **Hardware**: The physical, tangible components (circuits, chips, cables).
- **Software**: The intangible sets of instructions that tell the hardware what to do.

### Von Neumann Architecture
Most modern computing systems follow the **Von Neumann Architecture**, proposed in 1945. Its key principle is the **Stored Program Concept**, where both program instructions and data are stored in the same electronic memory.

**Key Components:**
1. **CPU (Central Processing Unit)**: The "brain" that executes instructions.
2. **Memory Unit**: Stores data and instructions.
3. **I/O Devices**: Provides interaction with the external world.
4. **Buses**: The communication pathways between these components.`,
        visual: {
          type: 'layers',
          data: ['Input Device', 'CPU (CU + ALU)', 'Memory Unit', 'Output Device']
        },
        examFocus: [
          'Difference between Hardware and Software.',
          'The concept of the Stored Program model.',
          'Diagramming basic Von Neumann blocks.'
        ],
        details: [
          { title: 'Computer', description: 'An integrated system of functional units that performs data processing.' },
          { title: 'Hardware', description: 'Physical components like the CPU, RAM, Motherboard, and Storage.' },
          { title: 'Software', description: 'Collections of programs and data that run on the hardware.' },
          { title: 'Von Neumann Architecture', description: 'A design with a single processing unit and a single memory for programs and data.' }
        ]
      },
      { 
        name: 'The Central Processing Unit (CPU)', 
        summary: 'Detailed internal structure: Control Unit, ALU, and the register set.',
        content: `The CPU executes instructions through its internal subsystems:

### Major Components
- **Control Unit (CU)**: The manager. It handles control signals, directs data flow, and manages the instruction cycle. It does not perform actual data processing.
- **Arithmetic Logic Unit (ALU)**: The worker. It performs math (ADD, SUB) and comparisons (AND, OR, NOT).
- **Registers**: Ultra-fast internal storage locations.

### Detailed Register Set
| Register | Full Name | Purpose |
| :--- | :--- | :--- |
| **PC** | Program Counter | Holds the address of the NEXT instruction to be fetched. |
| **ACC** | Accumulator | Stores intermediate results of ALU calculations. |
| **IR** | Instruction Register | Holds the actual current instruction being executed. |
| **MAR** | Memory Address Register | Holds the memory address for a read/write operation. |
| **MDR** | Memory Data Register | Holds the actual data being transferred to/from memory. |
| **SP** | Stack Pointer | Tracks the top of the program stack (used for function calls). |
| **Flags** | Status Register | Bits representing outcomes (Zero, Carry, Overflow, Sign). |

### System Clock
Generates pulses at a fixed rate (GHz) to synchronize all internal operations. One "clock cycle" is the smallest unit of time for a CPU operation.`,
        visual: {
          type: 'flow',
          data: ['Fetch (PC->MAR)', 'Decode (CU)', 'Execute (ALU)', 'Store (MDR)']
        },
        examFocus: [
          'Detailed roles of MAR, MDR, and PC.',
          'Functionality of the Control Unit vs ALU.',
          'Definition of Clock Speed and GHz metrics.'
        ],
        details: [
          { title: 'Control Unit (CU)', description: 'Directs the operation of the processor. It tells the memory, ALU, and I/O how to respond to instructions.' },
          { title: 'ALU', description: 'Performs all calculations and logical decisions.' },
          { title: 'Accumulator (ACC)', description: 'A general-purpose register that stores the output of the ALU.' },
          { title: 'Flags/Status Register', description: 'Contains individual bits (Z, C, S, V) that indicate the results of the last operation.' }
        ]
      },
      { 
        name: 'Memory Hierarchy & RAM', 
        summary: 'Balanced storage design: SRAM vs DRAM and hierarchical standards.',
        content: `### Memory Hierarchy
No single memory is perfect. We use a hierarchy to balance **Speed, Cost, and Capacity**:
- **Registers**: Fastest, smallest, inside CPU.
- **Cache**: Fast SRAM, between CPU and RAM.
- **Primary Memory (RAM)**: Main workspace, volatile.
- **Secondary Memory**: Large, non-volatile (HDD/SSD).

### RAM (Random Access Memory)
RAM is volatile—data is lost when power is cut. It has two main types:

1. **DRAM (Dynamic RAM)**:
   - Uses capacitors (charge leaks, needs constant refresh).
   - Slower but much cheaper and denser.
   - Used for main system memory.
2. **SRAM (Static RAM)**:
   - Uses flip-flops (retains state without refresh as long as power is on).
   - Extremely fast but expensive/bulky.
   - Used for CPU Cache.

### ROM (Read Only Memory)
Non-volatile; used for critical firmware.
- **PROM**: Programmable once.
- **EPROM**: Erasable by UV light and reprogrammable.
- **EEPROM**: Erasable electrically. Basis of Flash memory.`,
        visual: {
          type: 'pyramid',
          data: [
            { label: 'Registers', color: 'bg-red-500' },
            { label: 'Cache (L1-L3)', color: 'bg-orange-500' },
            { label: 'Main Memory (RAM)', color: 'bg-yellow-500' },
            { label: 'Secondary (Disk)', color: 'bg-green-500' }
          ]
        },
        examFocus: [
          'Differences between SRAM and DRAM.',
          'Advantages/Disadvantages of RAM.',
          'Types of ROM: PROM, EPROM, EEPROM.'
        ],
        details: [
          { title: 'Primary Memory', description: 'Directly accessible by the CPU. Includes RAM, Cache, and ROM.' },
          { title: 'Secondary Memory', description: 'Used for long-term storage of files and OS. Non-volatile.' },
          { title: 'Volatility', description: 'The characteristic of memory where data is erased when power is lost.' },
          { title: 'Data Access Methods', description: 'Sequential (Tape) vs Direct (Disk/RAM) access.' }
        ]
      },
      { 
        name: 'Cache & Virtual Memory', 
        summary: 'Optimization logic: Multi-level caches and logical address mapping.',
        content: `### Cache Memory (In Detail)
Cache reduces the speed gap between the fast CPU and slow RAM using the **Locality of Reference**.
- **L1 Cache**: Smallest, fastest, integrated into CPU core.
- **L2 Cache**: Larger, slightly slower, often per core.
- **L3 Cache**: Shared among all CPU cores.
- **L4 Cache**: Rare, found in high-end specialized processors.

### Virtual Memory
A management technique where the OS uses secondary storage (HDD/SSD) to simulate more RAM.

**How it Works:**
1. **Paging**: Memory is divided into fixed-size "Pages" (logical) and "Frames" (physical).
2. **Page Table**: Maps virtual addresses used by programs to physical addresses in RAM.
3. **Address Translation**: The **MMU (Memory Management Unit)** hardware handles the address conversion.
4. **Page Fault**: Occurs when requested data isn't in RAM. The OS fetches it from the **Swap Space** on the disk.

### Advantages & Disadvantages
- **Pros**: Run larger programs, multitasking, better CPU utilization.
- **Cons**: Slower performance (disk access is slow), **Thrashing** (excessive swapping).`,
        visual: {
          type: 'flow',
          data: ['CPU Request', 'MMU Look-up', 'Page Table Check', 'RAM Access OR Swap']
        },
        examFocus: [
          'Difference between L1, L2, and L3 cache.',
          'Concepts of Paging and Page Replacement.',
          'Role of the MMU in address translation.'
        ],
        details: [
          { title: 'Locality of Reference', description: 'Temporal (recently used data) and Spatial (nearby data) access patterns.' },
          { title: 'Swap Space/Page File', description: 'The reserved area on the disk used to extend physical RAM.' },
          { title: 'MMU', description: 'The hardware component responsible for mapping virtual to physical addresses.' },
          { title: 'Thrashing', description: 'A state where the system spends more time swapping pages than executing instructions.' }
        ]
      },
      { 
        name: 'Storage Technologies: HDD vs SSD', 
        summary: 'Mechanical magnetic platters vs high-speed NAND flash memory.',
        content: `### Hard Disk Drive (HDD)
- **Structure**: Uses spinning **Magnetic Platters**, **Track/Sector** layout, and a mechanical **Read/Write Head**.
- **Performance**: Limited by seek time and rotational latency.
- **Pros**: Low cost per GB, high capacity.
- **Cons**: Fragile, slow, noisy.

### Solid State Drive (SSD)
- **Structure**: Uses **NAND Flash Memory** (Floating gate transistors). No moving parts.
- **Performance**: Near-instant access (0.1ms latency).
- **Pros**: Very fast, durable, silent, low power.
- **Cons**: Expensive, limited write life (though high today).

### Optical Storage
Uses laser light to read "Pits and Lands":
1. **CD**: ~700MB.
2. **DVD**: 4.7GB to 8.5GB (Dual Layer).
3. **Blu-ray**: 25GB to 100GB (High-density laser focus).

### Storage Comparison Table
| Feature | HDD | SSD | Optical |
| :--- | :--- | :--- | :--- |
| **Speed** | Slow (~150MB/s) | Very Fast (500-7000MB/s) | Slowest |
| **Durability** | Low (Shock-sensitive) | High | Moderate |
| **Capacity** | Very High | High | Low/Medium |
| **Cost** | Lowest | Medium/High | Low |`,
        visual: {
          type: 'grid-disks',
          data: { title: 'Secondary Media Comparison', layout: 'Magnetic Disk | Flash Storage | Optical Media | Magnetic Tape' }
        },
        examFocus: [
          'Detailed comparison table of HDD, SSD, and Optical.',
          'NAND Flash working principle.',
          'Magnetic platter seek time vs latency.'
        ],
        details: [
          { title: 'Magnetic Tape', description: 'Sequential access storage used for long-term archival/backup in data centers.' },
          { title: 'Track & Sector', description: 'Physical data organization on a magnetic platter disk.' },
          { title: 'Floating Gate', description: 'The semiconductor transistor used to store data in SSD memory cells.' },
          { title: 'Blu-ray', description: 'Uses a blue-violet laser with a shorter wavelength to pack data more densely.' }
        ]
      },
      { 
        name: 'The Motherboard Hub', 
        summary: 'Main parts, chipsets, form factors, and the central connection logic.',
        content: `The motherboard is the **Mainboard** or **PCB** that connects all functional units.

### Main Parts
- **CPU Socket**: Physical slot to install the CPU (LGA, PGA).
- **RAM Slots**: Physical channels for memory modules (DIMM).
- **Chipset**: The data logic manager.
  - **Northbridge**: Handles high-speed CPU/RAM/Graphics (integrated in modern CPUs).
  - **Southbridge**: Handles slower I/O (USB, SATA, PCIe, BIOS).
- **Storage Connectors**: **SATA** (Disk) and **M.2** (Fast NVMe SSD).
- **Expansion Slots**: **PCIe x16** (GPU) and **PCIe x1** (Expansion cards).
- **BIOS/UEFI Chip**: Stores startup firmware.
- **CMOS Battery**: Powers the system clock and retains BIOS settings when off.
- **I/O Ports**: External Rear I/O (USB, HDMI, Ethernet, Audio).

### Form Factors
1. **ATX**: Full size (Standard Desktop).
2. **Micro-ATX**: Compact Desktop.
3. **Mini-ITX**: Ultra-compact (Smallest standard).
4. **E-ATX**: Extended (Server/High-end workstation).`,
        visual: {
          type: 'layers',
          data: ['CPU / Northbridge', 'RAM / Memory Bus', 'Southbridge / I/O Controller', 'Peripherals / External Ports']
        },
        examFocus: [
          'Functions of the Northbridge and Southbridge.',
          'Comparing ATX, Micro-ATX, and ITX sizes.',
          'Role of the BIOS and CMOS Battery.'
        ],
        details: [
          { title: 'Form Factor', description: 'Specifies the size, shape, and layout of the motherboard.' },
          { title: 'Expansion Slot', description: 'Internal slots like PCIe that allow adding functionality via cards.' },
          { title: 'Cooling Mounts', description: 'Dedicated brackets and headers for CPU fans or liquid cooling.' },
          { title: 'Chipset', description: 'A group of integrated circuits that control communication between CPU and devices.' }
        ]
      },
      { 
        name: 'I/O Communication Methods', 
        summary: 'Technical protocols for data exchange: PIO, Interrupts, and DMA.',
        content: `How does a CPU actually talk to a device?

### 1. Programmed I/O (PIO)
The CPU is responsible for the entire transfer. It "polls" (checks) the device status repeatedly.
- **Inefficient**: CPU is busy waiting.

### 2. Interrupt-Driven I/O
The device signals the CPU when it's ready by sending an **Interrupt**.
- **Efficient**: CPU does other work until signaled. It then jumps to an **ISR (Interrupt Service Routine)**.

### 3. Direct Memory Access (DMA)
A separate **DMA Controller** handles bulky data transfers between Disk and RAM *without* involving the CPU.
- **Best for performance**: CPU only sets up and is notified at completion.

### 4. Memory-Mapped I/O (MMIO)
Devices are assigned specific "memory addresses." Writing to address \`0xABCD\` might actually send data to the GPU instead of RAM.
- **Simplified**: Uses the same instruction set for memory and I/O.`,
        visual: {
          type: 'stack',
          data: ['PIO (Polling)', 'Interrupt Handling', 'DMA Transfer', 'MMIO Access']
        },
        examFocus: [
          'Comparing PIO vs DMA performance.',
          'The concept of an Interrupt Service Routine (ISR).',
          'Relationship between I/O methods and CPU load.'
        ],
        details: [
          { title: 'Polling', description: 'The process where the CPU constantly checks if a device is ready.' },
          { title: 'DMA Controller', description: 'Hardware that handles bulk data transfers independently of the CPU.' },
          { title: 'ISR', description: 'A specific set of code that runs in response to a hardware interrupt.' },
          { title: 'Input Device', description: 'Keyboard, Mouse, Scanner, Microphone.' }
        ]
      },
      { 
        name: 'Device management & Interface Cards', 
        summary: 'Operating system control logic and modular circuit expansions.',
        content: `### Device Management
The OS must manage diverse hardware types:
- **Block Devices**: Handle data in fixed-size blocks (Disk, SSD). Random access.
- **Character Devices**: Handle stream of bytes (Keyboard, Serial). Sequential.
- **Network Devices**: Handle packet-based communication.

**Functions:**
- **Device Drivers**: Software bridge between OS and hardware.
- **Device Controller**: The hardware logic on the device.
- **Scheduling**: Managing the order of I/O requests.
- **Buffering**: Storing data temporarily during transfer.

### Interface Cards
Modular expansion boards for specific functions:
- **NIC (Network Interface Card)**: Wired/Wireless connectivity.
- **Graphics Card (GPU)**: Parallel processing for visual data.
- **Sound Card**: ADC/DAC processing for audio.
- **Storage Controller**: RAID or specialized data handling.
- **USB Expansion**: Adding extra Ports.
- **Thunderbolt Card**: Ultra high-speed daisy-chained I/O.`,
        visual: {
          type: 'grid-disks',
          data: { title: 'Expansion Ecosystem', layout: 'Wired NIC Card | Discrete GPU | HD Audio Card | Capture Card' }
        },
        examFocus: [
          'Difference between Block and Character devices.',
          'Role of Device Drivers in the system software stack.',
          'Types of interface cards and their specific use cases.'
        ],
        details: [
          { title: 'Device Driver', description: 'Software that translates general OS commands to device-specific code.' },
          { title: 'Network Controller', description: 'Handles protocol logic for Ethernet, Wi-Fi, or Bluetooth.' },
          { title: 'TV Tuner Card', description: 'Expansion card used to receive and display TV signals on a computer.' },
          { title: 'Buffering', description: 'Mechanism to smooth out speed differences between devices and the CPU.' }
        ]
      },
      { 
        name: 'Computer Buses & Interconnections', 
        summary: 'The highways of data: Types, architecture, and communication modes.',
        content: `A **Bus** is a communication pathway shared by multiple components.

### Types of Buses
1. **Data Bus**: Carries actual data bits (Bidirectional). Width (bits) determines bandwidth.
2. **Address Bus**: Carries the address location (Unidirectional). Width determines **Max Addressable Memory** ($2^N$).
3. **Control Bus**: Carries timing and command signals (RD, WR, RESET).

### Bus Architecture
- **System Bus**: Connects CPU, Memory, and Chipset. High speed.
- **Peripheral Bus**: Connects North/Southbridge to I/O slots (PCIe, USB).
- **Expansion Bus**: Connects additional components (GPU, Network).

### Communication Modes
- **Parallel**: Multiple bits sent at once over multiple wires. High throughput but distance-limited (Crosstalk).
- **Serial**: One bit sent after another over a single wire. Modern standard (SATA, USB, PCIe) due to higher clock speeds and signal integrity at distances.`,
        visual: {
          type: 'topologies',
          data: ['Control Bus (Logic)', 'Address Bus (Where)', 'Data Bus (What)', 'Bus Master (Priority)']
        },
        examFocus: [
          'Relationship between Address Bus width and RAM limit.',
          'Serial vs Parallel communication advantages.',
          'Structure of data, address, and control pathways.'
        ],
        details: [
          { title: 'Bus Width', description: 'The number of bits a bus can transmit simultaneously (e.g., 64-bit).' },
          { title: 'Bandwidth', description: 'The total data transfer rate, calculated as Width × Frequency.' },
          { title: 'System Bus', description: 'The primary backbone bus connecting the CPU to the memory controller.' },
          { title: 'Daisy Chaining', description: 'A wiring scheme where multiple devices are connected in sequence.' }
        ]
      },
      { 
        name: 'Firmware & The Boot Sequence', 
        summary: 'System software in ROM and the sequence of loading the OS.',
        content: `### Firmware
The low-level software permanently embedded in a hardware device.
- **Storage**: ROM, EPROM, or Flash.
- **Purpose**: Bridge between Hardware and the OS.

| Category | Software | Firmware |
| :--- | :--- | :--- |
| **Scope** | Broad application tasks (Apps/Games) | Specific to hardware control |
| **Persistence** | Stored on disk, loaded to RAM | Embedded in hardware chips |
| **Interaction** | direct user interaction | Limited / Background only |
| **Updatability** | Frequent (Weekly) | Rare / Critical risk |

### The Boot Process
The sequence when you press power:
1. **POST (Power-On Self-Test)**: Check CPU, RAM, and essential chips.
2. **BIOS/UEFI Activation**: Firmware loads basic hardware settings.
3. **Locate Bootloader**: Search disk/USB for the **Master Boot Record (MBR)**.
4. **Bootloader Execution**: Runs code like **GRUB** or **Windows Boot Manager**.
5. **Kernel Loading**: The core of the OS is loaded from Disk to RAM.
6. **Init System**: Launches user services and the Login screen.

**Types of Booting:**
- **Cold Boot**: From a completely OFF state.
- **Warm Boot**: Restarting when the system is already ON (Reset).`,
        visual: {
          type: 'flow',
          data: ['Power On', 'POST', 'BIOS/UEFI', 'Bootloader', 'OS Kernel']
        },
        examFocus: [
          'Software vs Firmware comparison table.',
          'Steps of the Boot Cycle (POST, BIOS, Kernel).',
          'Difference between BIOS and UEFI.'
        ],
        details: [
          { title: 'UEFI', description: 'Unified Extensible Firmware Interface. Modern replacement for the legacy BIOS.' },
          { title: 'Embedded System', description: 'A purpose-built computer inside another device (e.g., washink machine firmware).' },
          { title: 'System Initialization', description: 'Setting initial hardware states and preparing the logic for the OS.' },
          { title: 'Kernel', description: 'The central core of an operating system with complete control over everything.' }
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
      },
      {
        name: 'The Linux Command Line',
        summary: 'Essential shell commands for system interaction and automation.',
        content: `Interacting with Unix-like systems (Linux, macOS) often requires the **CLI (Command Line Interface)**.

### Basic Linux Commands
- **mkdir [dir_name]**: Create a new directory.
- **ls**: List all files and subfolders in the current directory.
- **cp [source] [dest]**: Copy file contents or move data.
- **chmod [permissions] [file]**: Change access permissions (Read/Write/Execute).
- **cat [file]**: Display the contents of a text file.

### Shell Scripting
A shell script is a file containing a series of commands. The shell (like **Bash**) reads this file and executes the commands in sequence.
\`\`\`bash
#!/bin/bash
echo "Initializing System Statistics..."
uptime
free -m
\`\`\``,
        examFocus: [
          'Core Linux commands for file management.',
          'Understanding file permissions (chmod).',
          'Basics of Shell scripting automation.'
        ],
        details: [
          { title: 'Directory Control', description: 'mkdir builds folders; ls reveals content; cd changes location.' },
          { title: 'Data Manipulation', description: 'cp copies; mv moves/renames; rm deletes.' },
          { title: 'Permissions', description: 'chmod handles who can view or run files using numeric (777) or symbolic (u+x) codes.' },
          { title: 'Automation', description: 'Bash scripts allow executing complex workflows with a single trigger.' }
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

### Basic Syntax
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>
    <a href="https://google.com">A Link</a>
  </body>
</html>
\`\`\`

### Common Tags
- **Headings**: \`<h1>\` to \`<h6>\` (h1 is largest).
- **Lists**: \`<ul>\` (unordered/bullets), \`<ol>\` (ordered/numbered).
- **Media**: \`<img src="image.jpg" alt="description">\`.

### Tables & Forms
Tables organize research:
\`\`\`html
<table border="1">
  <tr>
    <th colspan="2">Student Data</th>
  </tr>
  <tr>
    <td>ID</td>
    <td>Name</td>
  </tr>
</table>
\`\`\`

### Forms gather input:
\`\`\`html
<form action="/submit" method="POST">
  <input type="text" name="name" placeholder="Name">
  <input type="submit" value="Register">
</form>
\`\`\``,
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

### Syntax
\`\`\`css
selector {
  property: value;
}

h1 {
  color: navy;
  font-size: 24px;
}
\`\`\`

### The Box Model
Every element is a box consisting of:
1. **Margin**: Space outside the border.
2. **Border**: The edge of the box.
3. **Padding**: Space between border and content.
4. **Content**: Text or images.

### Layout Strategies
- **Flexbox (1D)**: \`display: flex; justify-content: center;\`.
- **CSS Grid (2D)**: \`display: grid; grid-template-columns: 1fr 1fr;\`.
- **Responsive**: 
\`\`\`css
@media (max-width: 600px) {
  body { background-color: lightgrey; }
}
\`\`\``,
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

### Language Basics
\`\`\`javascript
const now = new Date();
let message = "Hello, System!";

if (confirm("Show status?")) {
  alert("Current Date/Time: " + now.toLocaleString());
}
\`\`\`

### DOM Interaction
Select elements and change them on the fly:
\`\`\`javascript
const button = document.getElementById("trigger");
const output = document.querySelector(".result");

button.addEventListener("click", () => {
  output.innerText = "Interactivity Active!";
  output.style.color = "gold";
});
\`\`\`

### Key Features
- **Interactivity**: Buttons, forms, and pop-ups.
- **Dynamic Content**: Updating data without page reloads.
- **Validation**: Checking user inputs before sending to server.`,
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
