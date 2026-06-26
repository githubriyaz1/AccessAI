from fastapi import FastAPI  # type: ignore[import]

app = FastAPI(
    title="AccessAI API",
    description="Backend API for AccessAI",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AccessAI Backend 🚀"
    }