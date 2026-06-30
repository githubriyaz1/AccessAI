from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.pdf_service import extract_pdf_data
from app.accessibility.rules import analyze_accessibility

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    pdf_data = extract_pdf_data(file_path)

    analysis = analyze_accessibility(pdf_data)

    return {
        "status": "uploaded",
        "pdf": pdf_data,
        "accessibility": analysis
    }