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
    title: 'Data Representation & CPU Architecture',
    icon: Binary,
    topics: [
      {
        name: 'Data Storage Units',
        summary: 'Standardized measurements used to quantify digital information.',
        content: `### Bits and Bytes
- **Bit**: A binary digit (0 or 1). The smallest unit of data.
- **Byte**: A collection of 8 bits. It's the standard unit of storage (e.g., storing one character of text).

### Larger Units
Data grows exponentially using powers of 2.
- **Kilobyte (KB)**: $1,024$ bytes ($2^{10}$). Small text files.
- **Megabyte (MB)**: $1,024$ KB. High-resolution photos.
- **Gigabyte (GB)**: $1,024$ MB. HD movies.
- **Terabyte (TB)**: $1,024$ GB. Hard drives and SSDs.
- **Petabyte (PB)**: $1,024$ TB. Cloud data centers.
*(Followed by Exabyte, Zettabyte, and Yottabyte).*

**Why 1,024?** Computers use binary (base 2). While the decimal prefix "kilo" means 1,000, in computing $1\\text{ KB} = 2^{10} = 1,024$ bytes.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Relationship between bits, bytes, and kilobytes.',
          'Why computer storage uses powers of 2 (1,024 instead of 1,000).',
          'Hierarchy of units up to Yottabyte.'
        ],
        details: [
          { title: 'Bit', description: 'Short for binary digit. Basic building block representing a 1 or a 0.' },
          { title: 'Base-2 Mathematics', description: 'Computing relies on binary, leading to the use of $1024$ ($2^{10}$) for metric steps.' }
        ]
      },
      {
        name: 'Number Systems',
        summary: 'The structured methods of representing numerical values using different bases.',
        content: `A number system is defined by its **base (radix)**, which dictates the number of unique digits.

### Common Bases
1. **Decimal (Base 10)**: Digits 0-9. Used by humans.
2. **Binary (Base 2)**: Digits 0, 1. Used internally by computing circuits (ON/OFF).
3. **Octal (Base 8)**: Digits 0-7. Useful as a compact representation since 1 octal digit = 3 binary bits.
4. **Hexadecimal (Base 16)**: Digits 0-9 and A-F (where A=10, F=15). Widely used in memory addressing because 1 hex digit neatly represents 4 binary bits.

### The Conversion Principle
Any number can be converted between bases. For example, to convert to binary, repeatedly divide the decimal number by 2 and read remainders in reverse.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'The concept of Base (Radix).',
          'Why Hexadecimal is used in memory addressing.',
          'Value representation of hex characters A-F.'
        ],
        details: [
          { title: 'Radix', description: 'The number of unique digits, including zero, used in a number system.' },
          { title: 'Shorthand', description: 'Hexadecimal provides a crucial human-readable shorthand for long binary strings.' }
        ]
      },
      {
        name: 'Number Representations',
        summary: 'How integers, characters, and media are translated into binary combinations.',
        content: `### Storing Integers
A single integer is stored across memory locations. An 8-bit location stores values from 0-255. A 32-bit location stores over 4 billion values.
- **Binary-Coded Decimal (BCD)**: Each decimal digit is individually converted to a 4-bit binary sequence. Much less efficient for storage compared to standard binary.

### Signed Integers
Representing negative numbers requires sacrificing a bit for the sign.
1. **Sign and Magnitude**: Leftmost bit is the sign (0 is +, 1 is -). Presents difficulties due to a "double zero" (+0 and -0).
2. **1's Complement**: Invert all bits (0s to 1s). Still has double zero.
3. **2's Complement**: Invert all bits and add 1. This is the industry standard because it eliminates double zero and simplifies subtraction via addition circuits.

### 9's Complement (Decimal)
Used in digital subtraction. Find the 9's complement of B (subtract each digit from 9), add it to A, and adjust any carry.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Differences between 1\'s and 2\'s complement.',
          'The "double zero" problem of sign-magnitude representation.',
          'Calculation of 9\'s complement in decimal subtraction.'
        ],
        details: [
          { title: 'Binary-Coded Decimal', description: 'Storing "68" as the independent 4-bit sequences for 6 and 8. Inefficient for calculation.' },
          { title: '2\'s Complement', description: 'The mathematical standard allowing CPUs to perform subtraction purely with addition logic.' }
        ]
      },
      {
        name: 'Alphanumeric Character Data',
        summary: 'Standardized encoding schemes that translate text into binary strings.',
        content: `To process text, every letter, number, and punctuation mark (alphanumeric data) must be translated into binary. 

### Encoding Standards
1. **ASCII (American Standard Code for Information Interchange)**: Originally a 7-bit code providing 128 characters (English letters, digits, control codes). Later extended to 8-bit (Latin-1) for 256 characters.
2. **EBCDIC**: An older 8-bit standard developed by IBM, mostly restricted to mainframes.
3. **Unicode**: The modern universal standard. While ASCII is limited, Unicode supports over a million characters using 8-bit, 16-bit (UTF-16), or 32-bit words. It supports almost every global alphabet, ideographs (Chinese, Japanese), and emojis. 

*ASCII is actually a subset of Unicode, meaning conversion is simply padding the 8-bit ASCII value with zeroes to reach 16 bits.*`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'The limitations of ASCII and EBCDIC.',
          'Why Unicode is the modern standard for global text.',
          'Understanding that text must be entered and stored digit-by-digit.'
        ],
        details: [
          { title: 'ASCII', description: 'Pronounced "as-key". The foundational encoding for English text on the early web.' },
          { title: 'Unicode', description: 'The comprehensive global standard replacing ASCII to support all languages.' }
        ]
      },
      {
        name: 'CPU Architecture & Components',
        summary: 'The main structural units of the brain of the computer.',
        content: `The **Central Processing Unit (CPU)** executes instructions using three primary structural units:

1. **Arithmetic Logic Unit (ALU)**: The computational core. Performs math (addition, multiplication) and logic (AND, XOR) operations. It relies on internal logic gates and updates **Status Flags** (Zero, Carry, Sign, Overflow) based on calculation results.
2. **Control Unit (CU)**: The manager. Retrieves instructions, interprets them, and generates control signals to move data via the system bus.
   - **Hardwired**: Fixed logic circuits (Fast, RISC).
   - **Microprogrammed**: Stored microinstructions (Flexible, CISC).
3. **Registers**: Tiny, ultra-fast storage inside the CPU. 
   - *General Purpose*: Used for temporary execution data.
   - *Special Purpose*: **PC** (Program Counter), **IR** (Instruction Register), **MAR** (Memory Address), **MDR** (Memory Data).

The **System Bus** links everything together, consisting of the explicit Data Bus, Address Bus, and Control Bus.`,
        visual: {
          type: 'flow',
          data: ['Control Unit', 'ALU', 'Registers', 'System Bus']
        },
        examFocus: [
          'Differentiate between ALU and Control Unit responsibilities.',
          'Functions of specialized registers like PC, IR, MAR, and MDR.',
          'Hardwired vs Microprogrammed Control Units.'
        ],
        details: [
          { title: 'ALU Status Flags', description: 'Single bits updated after an ALU operation stating if the result was Zero, Negative, or carried over.' },
          { title: 'Program Counter (PC)', description: 'Tracks the exact memory address of the next instruction waiting to be executed.' }
        ]
      },
      {
        name: 'The Instruction Cycle',
        summary: 'The fundamental sequence of steps followed by the CPU to execute instructions.',
        content: `The CPU processes instructions in a continuous loop called the **Fetch-Decode-Execute Cycle**.

### The 4 Stages
1. **Fetch**: 
   - The Program Counter (PC) sends the next instruction's address to the MAR.
   - The instruction is retrieved from memory and placed into the Instruction Register (IR).
   - The PC increments.
2. **Decode**: 
   - The Control Unit interprets the IR contents, identifying the Opcode and Operands.
3. **Execute**: 
   - The ALU executes arithmetic, or data is moved through registers.
4. **Store (Write-back)**: 
   - The computed result is written back to the Accumulator, a register, or main memory.`,
        visual: {
          type: 'flow',
          data: ['Fetch (from RAM)', 'Decode (by CU)', 'Execute (by ALU)', 'Store (to Register/RAM)']
        },
        examFocus: [
          'Detailed step-by-step breakdown of the Fetch cycle.',
          'The specific data flow between PC, MAR, and IR during fetching.',
          'The outcome of the Decode phase.'
        ],
        details: [
          { title: 'Fetch Phase', description: 'Primarily a memory retrieval operation initiated by the Program Counter.' },
          { title: 'Execution Phase', description: 'The actual processing of the data, primarily utilizing the ALU and Control Signals.' }
        ]
      },
      {
        name: 'Instruction Sets & Addressing Modes',
        summary: 'How software speaks to hardware through defined operational codes.',
        content: `An **Instruction Set Architecture (ISA)** is the interface connecting software to CPU hardware.

### Instruction Components
- **Opcode**: What to do (e.g., ADD, MOV).
- **Operands**: The data to manipulate.
- **Addressing Mode**: How to locate the operands.
  - *Immediate*: Value is hardcoded in the instruction (\`MOV R1, 5\`).
  - *Register*: Data is inside a processor register.
  - *Direct*: Exact memory address is specified.
  - *Indirect*: A register points to a memory address.
  - *Indexed*: Calculated using a base address plus an offset.

### Architectural Philosophies
- **CISC**: Complex Instruction Set Computing (x86). Large sets, complex multi-step operations in single lines.
- **RISC**: Reduced Instruction Set Computing (ARM). Small sets, highly optimized, faster per-cycle execution.

### Instruction Format Types
Instructions vary by operand count: from **Zero-Address** (stack operations) up to **Three-Address** (source1, source2, destination).`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Contrast CISC vs RISC architectures.',
          'Define the 5 main addressing modes (Immediate, Register, Direct, Indirect, Indexed).',
          'Components of an instruction: Opcode vs Operand.'
        ],
        details: [
          { title: 'Opcode', description: 'The binary code specifying the mathematical or logical operation.' },
          { title: 'Addressing Mode', description: 'The protocol defining how the Instruction interprets its operand values.' }
        ]
      },
      {
        name: 'Assembly Language',
        summary: 'Low-level human-readable code that directly drives CPU instructions.',
        content: `**Assembly Language** uses readable mnemonics (like ADD, MOV, SUB) instead of raw binary machine code.

- **Assembler**: The tool required to translate Assembly mnemonics into executable binary.

### Features
- Provides absolute, direct control over memory and CPU registers.
- Extremely fast execution due to lack of software overhead.
- Highly machine-dependent (code written for ARM will not run on Intel).

### Basic Instruction Categories
1. **Data Transfer**: \`MOV\`, \`LOAD\`, \`STORE\`, \`PUSH\`
2. **Arithmetic**: \`ADD\`, \`SUB\`, \`INC\`
3. **Logical**: \`AND\`, \`OR\`, \`XOR\`
4. **Control Transfer (Branching)**: \`JMP\` (Jump), \`JE\` (Jump if Equal)

*Example*: Reading memory to a register, adding value, and storing it back is a fundamental layout of Assembly logic.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Advantages (speed, direct control) and Disadvantages (hard to learn, not portable) of Assembly.',
          'Recognizing core mnemonics like MOV, JMP, and LOAD.',
          'Need for an Assembler.'
        ],
        details: [
          { title: 'Mnemonic', description: 'A short text code representing a CPU operation, acting as a mental aid.' },
          { title: 'Portability', description: 'Assembly is fundamentally non-portable because it is tied directly to a specific custom ISA.' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Computer Networks & Internet',
    icon: Globe,
    topics: [
      {
        name: 'Introduction to Computer Networks',
        summary: 'The foundations of connecting devices for resource sharing and communication.',
        content: `A **Computer Network** is a set of devices (nodes) connected by communication links. 

### Why Network?
- **Resource Sharing**: Printers, storage.
- **Data Exchange**: Emails, file transfers.
- **Cost Reduction**: Share a single internet connection or centralized server.
- **Reliability**: Alternative sources of data if one node fails.

### Connection Types
- **Point-to-Point**: A dedicated link between two specific devices.
- **Multipoint**: Several devices share a single link.`,
        visual: {
          type: 'topologies',
          data: ['Point-to-Point', 'Multipoint / Broadcast']
        },
        examFocus: [
          'Advantages of networking.',
          'Differences between Point-to-Point and Multipoint connections.'
        ],
        details: [
          { title: 'Node', description: 'Any device capable of sending/receiving data on a network.' },
          { title: 'Link', description: 'The physical or logical communication pathway.' }
        ]
      },
      {
        name: 'Network Topologies',
        summary: 'The geometric arrangement of nodes and links in a network.',
        content: `### Topologies
1. **Star**: All nodes connect to a central hub/switch. Very common. Hub failure brings down the network.
2. **Bus**: All nodes share one backbone cable. Cheap, but any cable break stops the network.
3. **Ring**: Nodes are connected in a closed loop. Signal passes in one direction.
4. **Mesh**: Every node connects to every other node. Extremely reliable but very expensive.
5. **Tree**: A hierarchical structure combining Star and Bus characteristics.`,
        visual: {
          type: 'topologies',
          data: ['Star', 'Bus', 'Ring', 'Mesh']
        },
        examFocus: [
          'Comparing Mesh vs Star topology.',
          'Understanding the vulnerability of Bus topology.'
        ],
        details: [
          { title: 'Topology', description: 'The layout configuration of a network.' },
          { title: 'Hub/Switch', description: 'The central controller in a Star topology.' }
        ]
      },
      {
        name: 'Network Types (LAN, MAN, WAN, PAN)',
        summary: 'Categorizing networks based on their geographical scale.',
        content: `### Network Scale Categories
- **PAN (Personal Area Network)**: Range of a few meters. Bluetooth, Zigbee.
- **LAN (Local Area Network)**: Covers a home, office, or small campus. Uses Ethernet or Wi-Fi. High speed, privately owned.
- **MAN (Metropolitan Area Network)**: Covers a city. E.g., Cable TV networks or city-wide WiMAX.
- **WAN (Wide Area Network)**: Covers a large geographical area (country/continent). Connects multiple LANs across public or leased lines. The Internet is the largest WAN.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Difference between LAN and WAN bandwidth/ownership.',
          'Identifying PAN examples.'
        ],
        details: [
          { title: 'LAN', description: 'High speed, local scope, typically Ethernet/Wi-Fi.' },
          { title: 'WAN', description: 'Lower speed, long-distance, reliant on telecom providers.' }
        ]
      },
      {
        name: 'Network Hardware',
        summary: 'The physical devices that direct traffic across networks.',
        content: `### Core Hardware
- **NIC (Network Interface Card)**: Circuitry installed in a host to connect to a network. Contains the MAC address.
- **Hub**: A simple device that broadcasts incoming data to all ports. Dumb and creates collisions.
- **Switch**: Intelligent. Forwards data only to the specific port where the destination MAC address lives.
- **Router**: Connects differently addressed networks (like your home LAN to the ISP's WAN). Routes packets based on IP addresses.
- **Modem**: Modulates/Demodulates digital data to analog signals (for fiber, cable, or phone lines).`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Switch vs Hub efficiency.',
          'Function of a Router.'
        ],
        details: [
          { title: 'MAC Address', description: 'A unique physical ID burned into every NIC.' },
          { title: 'Router', description: 'Connects multiple networks and chooses the best path for packets.' }
        ]
      },
      {
        name: 'The OSI Reference Model',
        summary: 'A 7-layer theoretical framework explaining network communication.',
        content: `The **Open Systems Interconnection (OSI)** model divides network architecture into 7 conceptual layers.

1. **Physical**: Raw 0s and 1s over a medium (cables, frequency).
2. **Data Link**: Node-to-node delivery, error checking, MAC addressing (Switches).
3. **Network**: End-to-end routing, IP addressing (Routers).
4. **Transport**: Reliable process-to-process delivery, segmentation, Error recovery (TCP/UDP).
5. **Session**: Establishes, maintains, and terminates communication sessions.
6. **Presentation**: Data translation, encryption, and compression (SSL/TLS).
7. **Application**: Network applications engaging with the user (HTTP, FTP, SMTP).`,
        visual: {
          type: 'layers',
          data: ['7: Application', '6: Presentation', '5: Session', '4: Transport', '3: Network', '2: Data Link', '1: Physical']
        },
        examFocus: [
          'Naming all 7 layers in order.',
          'Responsibilities of the Network and Transport layers.'
        ],
        details: [
          { title: 'Encapsulation', description: 'As data moves down the layers, headers are added at each step.' },
          { title: 'Layer 3', description: 'Network Layer. Responsible for IP Routing.' }
        ]
      },
      {
        name: 'The TCP/IP Protocol Suite',
        summary: 'The actual 4-layer framework that powers the modern Internet.',
        content: `While OSI is theoretical, **TCP/IP** is the practical architecture of the internet.

### TCP/IP Layers
1. **Network Access Layer**: Maps to OSI Physical and Data Link. Handled by drivers/hardware.
2. **Internet Layer**: Maps to OSI Network. The IP protocol lives here.
3. **Transport Layer**: Maps to OSI Transport. Handles **TCP** (reliable, ordered) and **UDP** (fast, unreliable, used for video/games).
4. **Application Layer**: Maps to OSI Top 3 layers. Handles high-level protocols like HTTP, DNS, and SMTP.`,
        visual: {
          type: 'stack',
          data: ['Application', 'Transport (TCP/UDP)', 'Internet (IP)', 'Network Access']
        },
        examFocus: [
          'Mapping TCP/IP layers to OSI layers.',
          'Differences between TCP and UDP.'
        ],
        details: [
          { title: 'TCP', description: 'Transmission Control Protocol. Ensures all packets arrive perfectly via handshakes.' },
          { title: 'UDP', description: 'User Datagram Protocol. Fires packets blindly for maximum speed.' }
        ]
      },
      {
        name: 'IP Addressing (IPv4 vs IPv6)',
        summary: 'The logical addressing system used to find hosts across the globe.',
        content: `Every device on a network needs a logical address to communicate.

### IPv4
- **Structure**: 32-bit address, normally written as four decimal octets (e.g., \`192.168.1.1\`).
- **Limitation**: Only ~4.3 billion addresses, which we have exhausted. Use of NAT helps delay the shortage.

### IPv6
- **Structure**: 128-bit address, written in 8 groups of 4 hexadecimal digits (e.g., \`2001:0db8:85a3:0000:0000:8a2e:0370:7334\`).
- **Advantage**: Trillions of times more addresses than IPv4, ensuring we never run out. Includes built-in auto-configuration and better security.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Address space size differences (32-bit vs 128-bit).',
          'Recognizing the visual format of IPv4 vs IPv6.'
        ],
        details: [
          { title: 'Octet', description: 'An 8-bit section of an IPv4 address.' },
          { title: 'NAT', description: 'Network Address Translation. Allows multiple private IPs to map to one public IP.' }
        ]
      },
      {
        name: 'DNS and DHCP',
        summary: 'Crucial infrastructure protocols for human-friendly web usage and IP allocation.',
        content: `### DNS (Domain Name System)
Humans remember names (\`google.com\`); computers need IPs (\`142.250.190.46\`).
- **Function**: DNS is the phonebook of the internet. It translates domain names into IP addresses.
- **Hierarchy**: Root servers -> Top-Level Domain (.com) servers -> Authoritative Name Servers.

### DHCP (Dynamic Host Configuration Protocol)
- **Function**: Automatically assigns IP addresses, subnet masks, and default gateways to devices when they join a network.
- **Advantage**: Prevents IP conflicts and saves humans from having to manually type IP configurations for every phone and laptop in an office.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'The specific purpose of DNS translation.',
          'Why DHCP is essential for enterprise LANs.'
        ],
        details: [
          { title: 'DNS Resolution', description: 'The process of querying databases to find the IP attached to a domain.' },
          { title: 'Dynamic IP', description: 'An IP address loaned temporarily to a device by a DHCP server.' }
        ]
      },
      {
        name: 'Network Security & Firewalls',
        summary: 'Protecting network perimeters and securing data in transit.',
        content: `A massive part of networking is keeping out malicious actors.

### Firewall
A network security device that monitors and filters incoming and outgoing traffic based on an organization's previously established security policies.
- It acts as a barrier separating a trusted internal network from the untrusted Internet.

### VPN (Virtual Private Network)
- Creates a secure, encrypted "tunnel" over a less secure network (the public internet).
- **Purpose**: Allows remote workers to securely access office servers, or masks a user's location and data from ISPs/hackers.

### Cryptography Basics
- **Symmetric**: The same key encrypts and decrypts (fast, risky to share key).
- **Asymmetric**: Public key encrypts, Private key decrypts (slower, extremely secure). SSL/TLS uses this.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Role of a Firewall.',
          'How a VPN secures a public connection.',
          'Symmetric vs Asymmetric encryption basics.'
        ],
        details: [
          { title: 'Firewall Filter', description: 'Rules like "Block all traffic on port 80" or "Only allow this IP." ' },
          { title: 'Encryption', description: 'Scrambling data so it is illegible without the decryption key.' }
        ]
      },
      {
        name: 'The World Wide Web & ISP',
        summary: 'The client-server application layer and how users connect globally.',
        content: `### The Web (WWW)
The Web is just one service acting *on top* of the Internet infrastructure. It uses **HTTP/HTTPS** protocols.
- **Client**: Web browsers that request pages (Chrome, Edge).
- **Server**: Powerful computers that host websites (Apache, Nginx).
- **URL (Uniform Resource Locator)**: The web address (e.g., \`https://www.example.com\`).

### ISP (Internet Service Provider)
A company that provides individuals and organizations access to the internet.
- **Tier 1**: Global backbone owners (AT&T, Verizon).
- **Tier 2/3**: Local providers who buy bandwidth from Tier 1 companies to sell to homes.`,
        visual: {
          type: 'stack',
          data: ['Client (Browser)', 'Internet (TCP/IP)', 'Web Server (Data)', 'Database (Storage)']
        },
        examFocus: [
          'Difference between the Internet (Hardware/Infrastructure) and the Web (Software/Pages).',
          'Role of the Client vs the Server.'
        ],
        details: [
          { title: 'HTTP', description: 'Hypertext Transfer Protocol. The foundation of data communication for the Web.' },
          { title: 'ISP', description: 'The gateway company granting you a valid public IP to reach the broader network.' }
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
        name: 'Fundamentals of Web Delivery', 
        summary: 'The sequence of events from URL entry to page rendering.',
        content: `Web design involves understanding the complete environment where web pages operate.

### Delivery Lifecycle
1. **Request**: Connection via HTTP/HTTPS. **HTTPS** adds SSL/TLS for encryption.
2. **DNS Resolution**: The browser finds the IP of the server.
3. **Fetch**: Retrieving HTML, CSS, and JS files from the server.
4. **DOM Build**: The browser parses the HTML and renders the page structure visually.

### Static vs Dynamic
- **Static Website**: Pre-written HTML sent exactly as stored on the disk. Fast, cheap, difficult to maintain for large sites.
- **Dynamic Website**: A backend server (like Node.js, PHP, Python) connects to a database and dynamically generates customized HTML for every user request (like Facebook or Amazon).`,
        visual: {
          type: 'flow',
          data: ['URL Entry', 'DNS Lookup', 'TCP Handshake', 'Data Transfer', 'DOM Render']
        },
        examFocus: [
          'Steps in loading a webpage.',
          'Static vs Dynamic web applications.',
          'Significance of HTTPS.'
        ],
        details: [
          { title: 'DOM', description: 'Document Object Model. The browser\'s memory-tree of your HTML tags.' },
          { title: 'HTTPS', description: 'Hypertext Transfer Protocol Secure. Crucial for protecting user data.' }
        ]
      },
      { 
        name: 'HTML5 Structure & Semantic Tags', 
        summary: 'Using modern markup to define meaning and hierarchy in web documents.',
        content: `**HTML (HyperText Markup Language)** defines the structure.

### Basic Boilerplate
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
\`\`\`

### Semantic Tags
Before HTML5, developers used \`<div>\` for everything. Now we use **Semantic Tags** that describe their own purpose. This vastly improves SEO (Search Engines) and Accessibility (Screen Readers for the blind).
- \`<header>\`: Logo and main nav.
- \`<nav>\`: Navigation links.
- \`<main>\`: The primary content of the document.
- \`<article>\`: A self-contained piece of content (like a blog post).
- \`<aside>\`: Sidebars.
- \`<footer>\`: Copyright and bottom links.`,
        visual: {
          type: 'layers',
          data: ['<header>', '<nav>', '<main> and <aside>', '<footer>']
        },
        examFocus: [
          'Structure of the basic HTML document.',
          'Why Semantic tags are better than generic divs.',
          'Accessibility benefits.'
        ],
        details: [
          { title: '<head>', description: 'Contains invisible metadata, CSS links, and the page title.' },
          { title: 'Semantic', description: 'Meaningful, descriptive markup rather than purely presentational markup.' }
        ]
      },
      { 
        name: 'HTML Text Formatting & Links', 
        summary: 'Writing paragraphs, emphasis, and hyperlinks.',
        content: `Content needs to be shaped into readable formats.

### Text Tags
- **Headings**: \`<h1>\` (Largest, most important) to \`<h6>\` (Smallest).
- **Paragraphs**: \`<p>\`.
- **Emphasis**: \`<strong>\` (Bold text, indicates importance) and \`<em>\` (Italicized, indicates emphasis).

### Lists
1. **Unordered**: Bullet points.
\`<ul> <li>Item A</li> </ul>\`
2. **Ordered**: Numbered lists.
\`<ol> <li>Step 1</li> </ol>\`

### Hyperlinks
The core feature of the World Wide Web.
\`<a href="https://example.com" target="_blank">Click Here</a>\`
- **href**: The destination address attribute.
- **target="_blank"**: Opens the link in a new tab.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Heading hierarchy.',
          'Ordered vs Unordered list syntax.',
          'Anatomy of the <a> tag.'
        ],
        details: [
          { title: 'Attribute', description: 'Extra information attached inside a tag (like href="...").' },
          { title: '<strong> vs <b>', description: 'strong adds semantic importance; <b> is just visual boldness.' }
        ]
      },
      { 
        name: 'HTML Tables, Forms, & Media', 
        summary: 'Displaying grids, collecting user input, and embedding images.',
        content: `### Images
\`<img src="logo.png" alt="Company Logo" />\`
- The **alt** attribute is mandatory for screen readers and in case the image fails to load.

### Tables
Used for rigid grid data (not for page layout!).
- \`<table>\`: The wrapper.
- \`<tr>\`: Table Row.
- \`<th>\`: Table Header cell (bold/centered).
- \`<td>\`: Table Data cell.

### Forms
How users send data to the server.
\`\`\`html
<form action="/login" method="POST">
  <label for="username">Name:</label>
  <input type="text" id="username" name="user">
  <input type="password" name="pass">
  <button type="submit">Log In</button>
</form>
\`\`\`
- **GET**: Parameters in URL (bad for passwords).
- **POST**: Parameters hidden in request body (used for secure login/data submission).`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Structure of tables (tr, td, th).',
          'The necessity of the img alt attribute.',
          'GET vs POST form methods.'
        ],
        details: [
          { title: 'Form Input Types', description: 'Text, password, email, radio, checkbox, submit, etc.' },
          { title: 'Table spanning', description: 'Using colspan="2" makes a cell stretch across two columns.' }
        ]
      },
      { 
        name: 'CSS Basics & Selectors', 
        summary: 'Targeting specific elements to apply styles across documents.',
        content: `**CSS (Cascading Style Sheets)** controls the presentation.

### Where to write CSS
1. **Inline**: \`<h1 style="color:red;">\` (Inefficient, overrides everything).
2. **Internal**: Inside \`<style>\` tags in the document \`<head>\`.
3. **External**: Linked \`.css\` file *(Industry Standard)*.

### Selectors
How CSS knows which HTML tags to style.
1. **Element**: \`h1 { color: blue; }\` (Targets ALL h1s).
2. **Class (.)**: \`.btn { font-weight: bold; }\` (Targets any tag with \`class="btn"\`. Highly reusable).
3. **ID (#)**: \`#header { margin: 0; }\` (Targets ONE specific element with \`id="header"\`. Highest specificity).

### Cascading Rules
If two rules conflict, CSS uses Specificity. ID > Class > Element. If there's a tie, the rule declared *last* wins.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Difference between Class (.) and ID (#) selectors.',
          'Inline vs Internal vs External inclusion.',
          'Understanding CSS Specificity.'
        ],
        details: [
          { title: 'Class', description: 'A grouping attribute. Many elements can share the same Class.' },
          { title: 'ID', description: 'A strictly unique identifier. Only one element per page can have a given ID.' }
        ]
      },
      { 
        name: 'The CSS Box Model', 
        summary: 'The mathematical foundation of physical dimensions on a web page.',
        content: `Every HTML element is considered a rectangular **Box** by the browser.

### The 4 Layers (From inside out)
1. **Content**: The text, image, or media. Its size is controlled by \`width\` and \`height\`.
2. **Padding**: The transparent space *inside* the border, pushing the border away from the content.
3. **Border**: The actual line encasing the padding and content.
4. **Margin**: The transparent space *outside* the border, pushing other elements away.

### Box-Sizing Problem
By default, if you set \`width: 100px\` and \`padding: 20px\`, the total width becomes 140px. 
**Solution**: Modern developers always use \`box-sizing: border-box;\`. This ensures that padding shrinks the content area inward rather than expanding the total width outward.`,
        visual: {
          type: 'box-model',
          data: {}
        },
        examFocus: [
          'Ordering of the Box Model layers.',
          'Difference between Padding and Margin.',
          'The effect of border-box sizing.'
        ],
        details: [
          { title: 'Padding', description: 'Internal spacing. Takes the background color of the element.' },
          { title: 'Margin', description: 'External spacing. Always completely transparent.' }
        ]
      },
      { 
        name: 'Page Layouts (Flexbox & CSS Grid)', 
        summary: 'Modern techniques for aligning items and building complex multi-column designs.',
        content: `Older methods (Floats/Tables) for webpage layouts were hacky. Today, we use two powerful native modules.

### Flexbox (1-Dimensional)
Best for aligning items in a single Row OR a single Column.
- **Parent**: \`display: flex;\`
- **Justify Content**: Aligns items on the main axis (e.g., left/right in a row). *Options: center, space-between, flex-end.*
- **Align Items**: Aligns items on the cross axis (e.g., up/down in a row).

### CSS Grid (2-Dimensional)
Best for complex overarching page layouts containing both Rows AND Columns simultaneously (like a checkerboard).
- **Parent**: \`display: grid;\`
- **Template definition**: \`grid-template-columns: 200px 1fr 1fr;\` (Creates a 200px sidebar and two equal flexible columns).
- **Grid Gaps**: Easily adds perfectly even spacing between rows and columns.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Understanding Flexbox is 1D and Grid is 2D.',
          'Using justify-content to center elements.'
        ],
        details: [
          { title: 'Flex-direction', description: 'Determines if elements flow standard (row) or stacked (column).' },
          { title: 'fr unit', description: '"Fraction". A flexible unit in CSS Grid that takes up remaining space.' }
        ]
      },
      { 
        name: 'Responsive Web Design', 
        summary: 'Techniques to make websites look good on desktop monitors, tablets, and phones.',
        content: `Websites must adapt dynamically to the screen size of the device loading them.

### Core Principles
1. **Fluid Grids**: Using percentages (\`width: 50%\`) or flexible units (\`vw\`, \`vh\`, \`fr\`) rather than rigid pixels (\`width: 500px\`).
2. **Flexible Images**: \`max-width: 100%; height: auto;\` ensures an image scales down to fit small screens but never exceeds its original resolution on big screens.
3. **Media Queries**: CSS rules that act as conditional logic.

### Media Queries
\`\`\`css
/* Base styles for mobile devices go here */

@media (min-width: 768px) {
  /* These styles ONLY apply on screens wider than a tablet */
  .sidebar { display: block; }
}
\`\`\`
**Mobile-First Design**: Writing the default CSS for a smartphone, then using \`min-width\` media queries to add complexity as the screen gets wider.`,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Syntax and purpose of a Media Query.',
          'Concept of Mobile-First vs Desktop-First development.',
          'Why rigid pixels break responsive sites.'
        ],
        details: [
          { title: 'Breakpoint', description: 'The specific pixel width (like 768px) where a media query triggers a layout shift.' },
          { title: 'Viewport Meta Tag', description: 'Crucial HTML tag ensuring phones don\'t "zoom out" to emulate a desktop screen.' }
        ]
      },
      { 
        name: 'JavaScript Fundamentals', 
        summary: 'Programming logic, variables, and structures that compute data.',
        content: `**JavaScript** adds logic and behavior.

### Variables
- \`var\`: Legacy. Avoid.
- \`let\`: For variables that will change. Block-scoped.
- \`const\`: For constants that should never change.

### Data Types
- Primitive: \`String\` ("Hello"), \`Number\` (42), \`Boolean\` (true/false), \`Null\`, \`Undefined\`.
- Complex: \`Array\` (\`[1, 2, 3]\`), \`Object\` (\`{ name: "John", age: 30 }\`).

### Control Structures
- **If/Else**: Branching logic.
  \`if (age >= 18) { allowEntry(); }\`
- **Loops**: For iterating over data or repeating actions.
  \`for (let i = 0; i < 5; i++) { ... }\`

### Functions
Reusable blocks of code.
\`\`\`javascript
function add(a, b) {
  return a + b;
}
// Arrow function syntax (modern)
const multiply = (x, y) => x * y;
\`\`\``,
        visual: {
          type: 'none',
          data: null
        },
        examFocus: [
          'Difference between let and const.',
          'Identifying Data Types (Array vs Object vs Primitive).',
          'Basic syntax of functions and loops.'
        ],
        details: [
          { title: 'Let vs Const', description: 'Always default to const unless you are certain the value must be rewritten later.' },
          { title: 'Boolean', description: 'A true or false value, essential for conditional logic.' }
        ]
      },
      { 
        name: 'DOM Manipulation & Events', 
        summary: 'How JavaScript bridges the gap between raw data logic and the visible HTML interface.',
        content: `JavaScript wouldn't be useful for web design if it couldn't talk to the HTML.

### The DOM
The **Document Object Model (DOM)** is a programming interface object created by the browser. It represents the HTML document as a tree structure that JS can query and alter.

### Selecting Elements
- \`document.getElementById("myBtn")\` (Fast, returns one).
- \`document.querySelector(".card")\` (Modern, returns the first match of a CSS selector).
- \`document.querySelectorAll(".card")\` (Returns an array-like list of all matches).

### Modifying Elements
Once selected, you can change them:
- \`element.innerText = "New Title";\`
- \`element.style.backgroundColor = "green";\`
- \`element.classList.add("hidden");\`

### Event Listeners
Code that waits for the user to do something.
\`\`\`javascript
const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", function(event) {
    alert("Button was clicked!");
});
\`\`\`
Common events: \`click\`, \`mouseover\`, \`keydown\`, \`submit\`.`,
        visual: {
          type: 'flow',
          data: ['User Event', 'Event Captured', 'JS Logic Processed', 'DOM UI Updated']
        },
        examFocus: [
          'What the acronym DOM stands for.',
          'Difference between getElementById and querySelector.',
          'Writing a basic event listener.'
        ],
        details: [
          { title: 'DOM Tree', description: 'The hierarchical representation of parent and child tags in memory.' },
          { title: 'addEventListener()', description: 'The standard method for attaching responsive logic to an HTML element.' }
        ]
      }
    ]
  }
];
