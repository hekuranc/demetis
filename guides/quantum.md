What is Quantum?
Quantum deals with the very small (atoms, photons) and the very cold (near absolute zero) objects.
While Newtonian physics explains how a golf ball moves, quantum physics explains what happens at the atomic level of the golf ball, where things behave very differently.

What is Special About Quantum Computer?
At this scale, specific properties emerges:
Superposition: where a quantum bit can be 0 and 1 at the same time
Entanglement: where particles influence each other instantly, no matter the distance.

It matters, because we can now control individual atoms. We can stop them, rotate them, and use them to perform calculations in ways classical computers never could.

Why Quantum Computing matters?
Quantum computing has the potential to be a force for solving some of society’s most intractable problems, from medical breakthroughs to climate modeling and secure communications. But in the hands of adversaries, it could become an unprecedented disruptive force, capable of dismantling global security, digital trust, and economic stability in ways we have never seen before.
Unlocking unprecedented computing power could lead to solving problems in minutes that would take today’s best computers thousands of years. That means breakthroughs in:
Finance – Optimizing portfolios, fraud detection, and risk modeling
Pharma & Biotech – Faster drug discovery and material science (precise example)
Cybersecurity – Unbreakable encryption and enhanced security
Logistics & AI – Route optimization and machine learning improvements

Quantum Computing Threatens Encryptions: Today, our entire digital world relies on encryption to protect sensitive data, secure communications, and verify authenticity. However, Shor’s Algorithm, a quantum computing breakthrough, could one day break RSA encryption and other widely used cryptographic protocols. This means:

TLS (Transport Layer Security) protocols, which protect everything from online banking to email and government communications, could be broken.
TLS is the foundation of secure internet communications, encrypting traffic between websites, apps, and users
Once RSA and ECC encryption are broken, all past and future TLS-protected data could be exposed.
Zero-trsut, double factor authentication, VPNs, HTTPS websites, banking transactions, and email communications will no longer be secure.
In principle, all communication on the internet including banking transactions and emails will be like an open book and everyone can read them.
Digital signatures (e.g., RSA, ECDSA, and Elliptic Curve Cryptography) used for authentication and non-repudiation could be compromised.
Digital signatures (RSA, ECC) prove authenticity of software updates, transactions, legal contracts, and identity verification.
If quantum computers can forge digital signatures, attackers can impersonate businesses, governments, or individuals.
This destroys non-repudiation, meaning someone could deny signing a contract or authorizing a transaction because signatures could be faked.
In principle, all documents/agreements signed digitally can be tampered and there would be no way to proof the non-repudiation.

Encrypted data transmissions today (financial transactions, classified intelligence, medical records) may be stored by adversaries and decrypted in the future once quantum computers are powerful enough.
Adversaries are already storing encrypted data today, waiting for quantum computers to be powerful enough to decrypt it later.
This applies to everything from military secrets to intellectual property, your personal data and customer data.
Any sensitive information that needs to remain confidential for years or decades (e.g., medical records, government intelligence, long-term financial data) is at risk.
Why is it a problem of today and not tomorrow? If cryptographically relevant quantum computers don’t exist yet, why is developing post-quantum encryption algorithms important now?
Encrypted data remains at risk because of the “harvest now, decrypt later” threat in which adversaries collect encrypted data now with the goal of decrypting it once quantum technology matures.
Since sensitive data often retains its value for many years, starting the transition to post-quantum cryptography now is critical to preventing these future breaches. This threat model is one of the main reasons why the transition to post-quantum cryptography is urgent. Emails and any other (encrypted) stored data are subject to this this risk.

Historically, the journey from algorithm standardization to full integration into information systems can take 10 to 20 years. This timeline reflects the complexity of companies building the algorithms into products and services, procuring those products and services, and integrating those products and services into technology infrastructures. (deployment of algorithm)

The weakest link of the chain in the communication will impact all parties. This means, not only we should care about our own “readiness”, but also we should lead the migration and monitor our third-(and n-th) parties, partners, customers, etc. Enforcing the standard algorithm could have an impact on business.

How to transition to Post-Quantum Cryptography:
Define strategy
Define roadmap including engagement with partners, vendors, and customers
Prepare inventories of encryptions (to identify vulnerabilities)
Define readiness index (and accept very slow progress in initial years)
Create awareness Campaign (as IT operations, business and safeguarding functions will be impacted)

What Needs to Happen Now?
Migrate to Post-Quantum Cryptography (PQC):
The National Institute of Standards and Technology (NIST) has selected PQC algorithms that resist quantum attacks.
Businesses, governments, and financial institutions must start integrating these new cryptographic standards now.
Identify & Replace Vulnerable Systems:
Audit TLS-based applications, VPNs, authentication mechanisms, and encrypted storage for quantum-vulnerable encryption.
Begin transitioning to quantum-safe digital signatures to preserve authenticity and non-repudiation. TImeline proposed by the US government is 2035
Act Before Quantum Computers Arrive: The risk is not hypothetical. The probability of material impact of quantum computing in 10 years is almost certain.

TOGETHER, WE WILL BE READY!
IT components to consider for Post-Quantum Cryptography Readiness

Technologies and Components:
To migrate to PQC algorithms, applications will need to be modified to make use of them. Many applications include components that are based on standardized protocols and security technologies that will need to be revised to support the use of the PQC algorithms.
In addition, applications are built on top of software cryptographic libraries that either provide
the implementations of the cryptographic algorithms or provide an interface to hardware
cryptographic modules. Any software cryptographic libraries and hardware cryptographic
modules used by an application will also need to be revised to support the PQC algorithms.
Applications may also rely upon infrastructure components, such as public key infrastructures (PKI), that would need to be updated to support the PQC algorithms before the applications themselves can migrate to using the PQC algorithms.

Network Protocol and Security Technology Standards

Network protocols and security technology standards define the rules for data exchange over networks and ensure secure and reliable communication. Examples include Transport Layer Security (TLS), Secure Shell (SSH), Internet Protocol Security (IPsec), and Cryptographic Message Syntax (CMS). These protocols and security technologies often rely on classical cryptographic algorithms that are vulnerable to quantum attacks. Updating them to incorporate PQC algorithms is essential to maintaining data confidentiality and integrity. This involves revising protocol specifications to support new key exchange mechanisms and authentication methods that are quantum-resistant. In some cases, this will involve simply assigning an identifier for the new algorithm. In other cases, more significant changes will be required to accommodate the larger sizes of the PQC algorithms or as a result of the new algorithms having different interfaces.
System/Protocol
How to Detect?
Action Required
TLS (Transport Layer Security)

Secure web browsing (HTTPS), API encryption, VPN, email encryption

RSA/ECC key exchanges are quantum-vulnerable. TLS traffic today may be decrypted in the future.
Upgrade to TLS 1.3with post-quantum hybrid key exchange. Ensure server certificates use PQC digital signatures.
SSH (Secure Shell)
Secure remote login and file transfers

Use hybrid key exchange (Kyber + ECDH), and update authentication to PQC digital signatures.
IPsec (VPN Encryption)
Secure tunnels for remote access and site-to-site connections

Use ML-KEM hybrid key exchange in IKEv2 to protect VPNs from quantum attacks.
S/MIME (Secure Email Encryption)
Encrypts and signs email content

Use PQC digital signatures for email signing (Dilithium, Falcon) and hybrid encryption for secure email communication.

Software Libraries

Software cryptographic libraries are collections of cryptographic algorithms and protocols that are implemented in software to provide essential cryptographic functions to applications. OpenSSL, BoringSSL, Libsodium, and the Java Cryptography Architecture (JCA) are a few examples of cryptographic libraries that are used to provide cryptographic support for applications.
These libraries need to incorporate PQC algorithms that are standardized by bodies like NIST. Updating them ensures that developers have access to quantum-resistant cryptographic functions without implementing complex algorithms themselves. This transition involves adding new algorithms, optimizing their implementations for performance, and ensuring those implementations are secure against side-channel attacks.

Software Library
How to Detect
Action Required
OpenSSL
Web servers, VPNs, secure communications

Upgrade to OpenSSL 3.x, enable PQC cipher suites.
BoringSSL / WolfSSL
Google Chrome, Cloudflare, lightweight IoT devices

Update cryptographic dependencies to support PQC-ready libraries.
Java Cryptography Architecture (JCA)

Enterprise applications, cloud computing

Switch to Java security providers supporting PQC algorithms (BouncyCastle, IBM PQC).

1.3 Cryptographic Hardware

Hardware Module
How to Detect?
Action Required
Hardware Security Modules (HSMs)

Existing HSMs use RSA/ECC for key storage, vulnerable to quantum decryption.
Upgrade to PQC-supported HSM firmware or replace with PQC-ready HSMs.
Trusted Platform Modules (TPMs)
Check TPM version (tpm_version)

Devices using TPM for authentication may be compromised when quantum computing breaks RSA/ECC.
Ensure firmware updatesfor PQC compatibility, consider replacing older TPM hardware.

1.4 Public Key Infrastructure (PKI) and Digital Signatures

Public key infrastructure (PKI) systems manage digital certificates and public-private key pairs to enable secure communication and authentication across networks. Other infrastructure components include certification authorities (CAs), registration authorities, key management systems, and directory services.
PKI components must be updated to issue, distribute, and manage certificates that use PQC algorithms and to sign certificates and revocation status information using PQC algorithms. This includes supporting new cryptographic algorithms in certificate issuance processes and modifying validation and revocation mechanisms. Ensuring backward compatibility and interoperability during the transition period is crucial to maintaining trust and security across the network.

Component
How to Detect?
Action Required
X.509 Certificates
TLS, VPN authentication, code signing, email encryption

Use hybrid PQC certificates that combine Dilithium/Falcon with RSA.
Code Signing
Windows updates, software package integrity

Transition to PQC signatures (Dilithium, Falcon).

1.5 Data Encryption (At Rest & In Transit)
IT applications and services encompass a wide array of software and platforms used by organizations, including web applications, databases, communication tools, cloud services, and enterprise software. These applications rely on cryptography for securing data, authenticating users, and ensuring secure transactions. Applications and services must be modified to support PQC algorithms for encryption, digital signatures, and key exchange. This requires updating the underlying cryptographic implementations, adjusting to changes in key sizes and algorithm performance, and ensuring compatibility with updated protocols and libraries. Developers need to refactor code, conduct extensive testing, and potentially redesign user interfaces to accommodate these changes.

Encryption Type
How to Detect?
Action Required
AES (Symmetric Encryption)
File encryption, cloud storage, VPNs, TLS

Upgrade to AES-256, avoid AES-128.
RSA / ECC Key Wrapping
Database encryption, cloud storage security

Use ML-KEM for key encapsulation in cloud and database security.

Background info on Quantum Algorithms
Where does the computing power of quantum computing come from?
Classical Bits: 0 or 1 -> Classical computers compute one state at a time
Qubits: 0 and 1 at the same time (Superposition) -> Quantum computers can compute all states at once.
Example:
3 bits = 8 possible states, but only one at a time.
3 qubits = All 8 states simultaneously.
Result: Huge efficiency gains for complex problems.

The Key Challenges; or so called Quantum Error Correction
Physical qubits are fragile – prone to errors.
Solution: Group multiple qubits into logical qubits for stability.
Google & IBM breakthroughs: Error correction progressing rapidly.
How does current cryptography work and how can quantum computing break it?
Currently, many encryption algorithms rely on the difficulty conventional computers have with factoring large numbers. Sufficiently powerful quantum computers would not have this difficulty.
Conventional cryptographic algorithms select two very large prime numbers — which are only divisible by 1 and themselves — and multiply them to obtain an even larger number. While multiplying the prime numbers is easy and fast, it’s far more difficult and time-consuming to reverse the process and figure out which two prime numbers were multiplied together, and that’s what a conventional computer would have to do to break this encryption. These two numbers are known as the “prime factors.” For large enough numbers, a conventional computer has been estimated to need billions of years to figure out these prime factors.
A sufficiently capable quantum computer, though, would be able to sift through all of the potential prime factors simultaneously, rather than one by one, arriving at the answer exponentially more quickly. Experts have begun referring to such a mature device as a “cryptographically relevant” quantum computer. Instead of billions of years, it’s possible a quantum computer could solve this puzzle in days or even hours, putting everything from state secrets to bank account information at risk.

How does post-quantum cryptography differ from quantum cryptography?

PQC algorithms are based on mathematical techniques that can be very old, such as elliptic curves, which trace their history back to ancient Greek times.
Quantum cryptography, on the other hand, is based fundamentally on quantum physics, which originated in the 20th century.
Post-quantum cryptography is a defense against potential cyberattacks from quantum computers. Quantum cryptography uses the counterintuitive properties of quantum mechanics to create new forms of secure encryption. Like PQC, it is also expected to be resistant to attacks from quantum computers, but in a different way.

Readiness Index
Cryptographic Configuration
Obtain the cryptographic information from Qualys as the Discovery tool
Process the Qualys information to learn the protocol behavior (e.g. TLS) found on servers, by technology

Benefits:
Better understanding of our protocol configuration (e.g. current behavior VS TLS evaluation criteria)
Coverage of the relevant assets across an enterprise
Efficient by taking advantage of already available services/tools

Costs:
The post-processing of the information must be developed separately
Multiple technologies to be covered (e.g. Apache, IIS, IHS, Tomcat for TLS web servers)

Acceptable criteria:
Define the rulesets required for the data analysis in each technology.
Evaluation of the protocol behavior for each technology separately.

Vendors: Qualys

Certificate Inventory in CMDB

Define a data model to inventory certificates in the context of an organization's IT assets
This data model should be able to handle hybrid, mixed or composite certificates
This data model should be pushed as an industry standard

Benefits:
Have a common model to inventory certificates
Be ahead in the PQ threat migration journey with a model capable of managing different ways of mixing certificates (classic and PQ). Cryptoagility
Being able to exchange information among different tools easily with an open model. No vendor lock-in.

Costs:
Define and validate the model
Understand Hybrid, Composite, Mixed PQ certificates definitions
Integration of the model in current tools that don't bring it out of the box

Acceptable criteria
The data model should be compatible with CBOM to engage CycloneDX and IBM, which already have a lot of work done in general BOM schemas, and in particular have a CBOM to represent general (current) cryptographic assets.

Vendors: ServiceNow, IBM, CycloneDX, NIST (to validate the model)

Awareness
Creating a dedicated space where valuable information can be found
Allowing organisations to gain knowledge

Benefits:
Time-saving when organisations start to build their migration plan
Classify/organise depending on the level of knowledge

Costs:
No significant costs except from time

Centralized HSM key Management
Establish formal requirements for a central key management solution.
The requirements, should standardize the basic functionalities a characteristics of a central key management solution to be developed in order to allow providers to develop relevant solutions.

Benefits:
Communicate with providers the sector necessities in these types of tools
Create a standard framework that allows to compare different tools

Costs:
Time
Knowledge on current infrastructure

Acceptance criteria:
A formal definition of a Central Key management solution requirements
Sharing the conclusions with vendors so they can work on implementing the requirements into their solutions.

Tool
Provider
Asset Categories
AgileSec
InfoSec Global
all
AQtive Guard
SandboxAQ
all
Quantum Safe Explorer
IBM
all

QuantumXchange
network

Qualys

Keyfactor

TerraQuantum
Intermediary

​​
