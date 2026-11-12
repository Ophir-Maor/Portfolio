// macOS-only maintenance helper. The site serves the resulting image, not PDFKit.
// Run: swift -module-cache-path /private/tmp/portfolio-swift-cache scripts/render-resume.swift
import AppKit
import PDFKit

let source = URL(fileURLWithPath: "public/Ophir_Maor_Resume.pdf")
guard let document = PDFDocument(url: source), let page = document.page(at: 0) else {
    fatalError("Add public/Ophir_Maor_Resume.pdf before rendering its first page.")
}
let bounds = page.bounds(for: .mediaBox)
let width = 1224
let height = Int(Double(width) * bounds.height / bounds.width)
let bitmap = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
let context = NSGraphicsContext(bitmapImageRep: bitmap)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
NSColor.white.setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()
context.cgContext.scaleBy(x: Double(width) / bounds.width, y: Double(width) / bounds.width)
context.cgContext.translateBy(x: -bounds.minX, y: -bounds.minY)
page.draw(with: .mediaBox, to: context.cgContext)
NSGraphicsContext.restoreGraphicsState()
let output = bitmap.representation(using: .png, properties: [:])!
try output.write(to: URL(fileURLWithPath: "public/resume-preview.png"))
print("Rendered first page: \(width) × \(height)")
