import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const cAssemblyProjectsData = [
  {
    id: 1,
    name: "HW1: filesofpix",
    description: "A C program that restores corrupted PGM image files by detecting and removing fake rows and random character injections. Implemented a custom line-reading function and used Hanson data structures to process files in one pass and output clean images.",
  },
  {
    id: 2,
    name: "HW2: iii",
    description: "Designed and implemented 2D array abstractions in C, including UArray2 for general arrays and Bit2 for packed bit arrays. Built programs to validate Sudoku solutions and remove black edges from scanned images using these data structures.",
  },
  {
    id: 3,
    name: "HW3: locality",
    description: "Implemented blocked 2D arrays to improve cache performance and built a program that rotates images using different memory access patterns. Predicted and measured performance differences between row-major, column-major, and block-major array access to understand how data locality affects execution speed.",
  },
  {
    id: 4,
    name: "HW4: arith",
    description: "Built an image compression program in C that converts PPM images to a compressed format using lossy techniques like color space transformation, discrete cosine transform, and quantization. Implemented bit-packing functions to store multiple small values in 32-bit words. In addition, optimized the compressor to achieve a size reduction.",
  },
  {
    id: 5,
    name: "HW5: bomb",
    description: "Defused a 'binary bomb' program by reverse-engineering its assembly code through six increasingly complex phases. Used GDB (GNU Debugger) and objdump to analyze control flow, stack frames, and data patterns to determine the correct inputs that prevent the bomb from 'exploding.'",
  },
  {
    id: 6,
    name: "HW6: um",
    description: "Built a virtual machine emulator in C that executes a 14-instruction architecture with segmented memory and 8 registers. Designed efficient abstractions for managing memory segments and implemented the complete instruction set including I/O, arithmetic, and control flow operations.",
  },
  {
    id: 7,
    name: "HW7: profiling",
    description: "Optimized a Universal Machine emulator by profiling it with valgrind and qcachegrind to identify performance bottlenecks. Applied code-tuning techniques like reducing function-call overhead and optimizing the instruction-dispatch loop to significantly improve execution speed on benchmark programs.",
  },
  {
    id: 8,
    name: "HW8: asmcoding",
    description: "Implemented an RPN calculator in Universal Machine assembly language that reads commands from standard input and performs stack-based arithmetic operations. Wrote modular assembly code with proper calling conventions and documentation to handle digit entry, arithmetic operations, and stack manipulation.",
  },
];

function CAssemblyProjects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="Projects-section">
      <Link to="/" className="Back-link">← Back</Link>
      <h2 className="Projects-title">C & Assembly Projects</h2>
      <p className="Projects-subtitle">
        These projects focus on low-level systems programming, covering topics like memory management, assembly language, computer architecture, image processing algorithms, performance optimization, and building virtual machines in C.
        For each project, I worked with a partner to design and plan out our architecture/data structures, build the entire program, and test it thoroughly.
      </p>
      <div className="Projects-grid">
        {cAssemblyProjectsData.map((project) => (
          <div
            key={project.id}
            className="Project-card"
          >
            <h3 className="Project-name">{project.name}</h3>

            <p className="Project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CAssemblyProjects;