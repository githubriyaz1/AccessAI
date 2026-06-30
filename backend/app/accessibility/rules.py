def analyze_accessibility(pdf_data):
    score = 100
    issues = []

    # ----------------------------
    # Rule 1
    # Missing PDF Title
    # ----------------------------
    if not pdf_data.get("title") or pdf_data["title"] == "N/A":
        score -= 5

        issues.append({
            "rule": "DOC001",
            "severity": "Low",
            "message": "Document title is missing.",
            "recommendation": "Add a meaningful PDF title."
        })

    # ----------------------------
    # Rule 2
    # Missing Author
    # ----------------------------
    if not pdf_data.get("author") or pdf_data["author"] == "N/A":
        score -= 3

        issues.append({
            "rule": "DOC002",
            "severity": "Low",
            "message": "Author metadata is missing.",
            "recommendation": "Provide an author name."
        })

    # ----------------------------
    # Rule 3
    # No Text
    # ----------------------------
    if pdf_data["text_length"] == 0:
        score -= 35

        issues.append({
            "rule": "TXT001",
            "severity": "Critical",
            "message": "No readable text found.",
            "recommendation": "Run OCR on the PDF."
        })

    # ----------------------------
    # Rule 4
    # Images Found
    # ----------------------------
    if pdf_data["total_images"] > 0:
        score -= 5

        issues.append({
            "rule": "IMG001",
            "severity": "Medium",
            "message": f"{pdf_data['total_images']} image(s) detected.",
            "recommendation": "Verify every image has alternative text."
        })

    # ----------------------------
    # Rule 5
    # No Headings
    # ----------------------------
    if pdf_data["total_headings"] == 0:
        score -= 15

        issues.append({
            "rule": "HDG001",
            "severity": "High",
            "message": "No headings detected.",
            "recommendation": "Use proper heading structure."
        })

    return {
        "score": max(score, 0),
        "issues": issues,
        "total_issues": len(issues)
    }