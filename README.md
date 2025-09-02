# Liturgy of the Hours Booklet Generator

A comprehensive web application that scrapes the Liturgy of the Hours from [iBreviary.com](https://ibreviary.com) and generates printable PDF booklets with customizable styling options.

## Features

### 📅 Date & Hour Selection
- **Date Picker**: Select any date for the liturgy
- **Hour Selection**: Choose from all major hours:
  - Invitatory
  - Morning Prayer (Lauds)
  - Daytime Prayer
  - Evening Prayer (Vespers)
  - Night Prayer (Compline)
  - Office of Readings

### 🎨 Comprehensive Styling Options
- **Font Selection**: Times New Roman, Helvetica, Courier, Georgia, Arial
- **Font Size**: Small (10pt), Medium (12pt), Large (14pt), Extra Large (16pt)
- **Density Control**: Compact, Normal, Spacious text spacing
- **Content Filtering**: Include/exclude specific elements:
  - Hymns
  - Psalms
  - Readings
  - Prayers
  - Rubrics
  - Antiphons

### 📋 PDF Generation Options
- **Page Size**: Letter, A4, Legal
- **Orientation**: Portrait or Landscape (optimized for booklet printing)
- **Headers**: Include liturgy title and date
- **Page Numbers**: Automatic page numbering

### ✏️ Markdown Editor
- **Live Preview**: See formatted content in real-time
- **Syntax Highlighting**: Professional markdown editing experience
- **Content Editing**: Modify liturgy content before PDF generation
- **CodeMirror Integration**: Advanced text editing capabilities

## How to Use

1. **Open the Application**
   - Open `liturgy-app.html` in any modern web browser
   - No server setup required - works entirely in the browser

2. **Select Date and Hour**
   - Choose the desired date using the date picker
   - Select the appropriate hour from the dropdown menu

3. **Configure Styling Options**
   - Choose your preferred font and size
   - Adjust text density for optimal readability
   - Select which content elements to include

4. **Set PDF Options**
   - Choose page size and orientation
   - Enable/disable headers and page numbers

5. **Fetch and Edit Content**
   - Click "📥 Fetch Liturgy" to retrieve content from iBreviary.com
   - Use the markdown editor to modify the content if needed
   - Preview changes in real-time

6. **Generate PDF**
   - Click "📄 Generate PDF" to create your booklet
   - The PDF will automatically download with your selected settings

## Technical Details

### Frontend-Only Architecture
- **No Backend Required**: All processing happens in the browser
- **CORS Proxy**: Uses `api.allorigins.win` to bypass CORS restrictions
- **Client-Side PDF Generation**: Uses jsPDF library for PDF creation
- **Markdown Processing**: Uses marked.js for markdown rendering

### Libraries Used
- **jsPDF**: PDF generation and formatting
- **Marked**: Markdown to HTML conversion
- **CodeMirror**: Professional markdown editor
- **HTML2Canvas**: Advanced PDF rendering (if needed)

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **JavaScript ES6+**: Requires modern JavaScript support
- **No Internet Explorer**: Not supported due to ES6+ features

## File Structure

```
omvtools/
├── liturgy-app.html          # Main application file
├── brevary.html             # Original basic version
├── genius.html              # Other project files
├── genius-styles.css
├── necrology.html
└── README.md               # This file
```

## Usage Examples

### Basic Usage
1. Open `liturgy-app.html`
2. Select today's date and "Evening Prayer (Vespers)"
3. Click "Fetch Liturgy"
4. Click "Generate PDF"

### Custom Styling
1. Select "A4" page size
2. Choose "Georgia" font with "Large" size
3. Set density to "Spacious"
4. Disable hymns and antiphons
5. Generate PDF for a clean, readable format

### Booklet Printing
1. Select "Landscape" orientation
2. Choose "Letter" page size
3. Enable headers and page numbers
4. Generate PDF for booklet-style printing

## Troubleshooting

### Common Issues

**"Error fetching liturgy content"**
- Check your internet connection
- The CORS proxy may be temporarily unavailable
- Try refreshing the page and trying again

**PDF not generating**
- Ensure you have content in the editor
- Check that your browser supports PDF generation
- Try a different browser if issues persist

**Content not loading**
- Verify the selected date and hour combination exists
- Some dates may have different liturgical content
- Try selecting a different hour or date

### Browser Requirements
- **JavaScript Enabled**: Required for all functionality
- **Modern Browser**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Internet Connection**: Required for fetching liturgy content

## Features in Detail

### Content Filtering
The application intelligently filters content based on your selections:
- **Hymns**: Traditional liturgical hymns and songs
- **Psalms**: Biblical psalms and canticles
- **Readings**: Scripture readings and commentaries
- **Prayers**: Collects, intercessions, and other prayers
- **Rubrics**: Liturgical instructions and directions
- **Antiphons**: Short verses before and after psalms

### PDF Optimization
- **Booklet Layout**: Optimized for double-sided printing
- **Page Breaks**: Intelligent content flow across pages
- **Margins**: Proper spacing for readability
- **Font Rendering**: High-quality text rendering

### Markdown Support
The editor supports standard markdown syntax:
- `# Headers` for section titles
- `**Bold text**` for emphasis
- `*Italic text*` for rubrics
- `> Blockquotes` for citations
- `℣` and `℟` for versicle/response markers

## Contributing

This is a frontend-only application designed for personal use. The application respects the content from iBreviary.com and is intended for legitimate liturgical use.

## License

This application is provided as-is for personal and liturgical use. Please respect the copyright of the liturgical texts from iBreviary.com.

---

**Note**: This application is designed for personal and liturgical use. Please ensure you comply with any copyright restrictions on the liturgical texts you use. 