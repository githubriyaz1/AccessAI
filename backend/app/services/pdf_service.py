import fitz


def is_heading(text: str):

    text = text.strip()

    if len(text) == 0:
        return False

    if len(text) > 60:
        return False

    uppercase_ratio = sum(c.isupper() for c in text) / max(
        1,
        sum(c.isalpha() for c in text)
    )

    return uppercase_ratio > 0.8


def extract_pdf_data(file_path: str):

    doc = fitz.open(file_path)

    metadata = doc.metadata

    full_text = ""

    images = []

    headings = []

    for page_number, page in enumerate(doc, start=1):

        blocks = page.get_text("dict")["blocks"]

        for block in blocks:

            if "lines" not in block:
                continue

            for line in block["lines"]:

                line_text = ""

                font_size = 0

                for span in line["spans"]:

                    line_text += span["text"]

                    font_size = max(font_size, span["size"])

                if line_text.strip():

                    full_text += line_text + "\n"

                if is_heading(line_text):

                    headings.append(
                        {
                            "page": page_number,
                            "text": line_text.strip(),
                            "font_size": round(font_size, 2)
                        }
                    )

        image_list = page.get_images(full=True)

        for index, img in enumerate(image_list, start=1):

            xref = img[0]

            pix = fitz.Pixmap(doc, xref)

            images.append(
                {
                    "page": page_number,
                    "image_number": index,
                    "width": pix.width,
                    "height": pix.height,
                    "colorspace": pix.colorspace.name if pix.colorspace else "Unknown",
                }
            )

            pix = None

    result = {

        "filename": file_path.split("\\")[-1],

        "pages": doc.page_count,

        "title": metadata.get("title") or "N/A",

        "author": metadata.get("author") or "N/A",

        "creator": metadata.get("creator") or "N/A",

        "producer": metadata.get("producer") or "N/A",

        "text_length": len(full_text),

        "total_images": len(images),

        "images": images,

        "total_headings": len(headings),

        "headings": headings

    }

    doc.close()

    return result