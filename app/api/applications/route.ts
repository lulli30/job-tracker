import { prisma } from "../../../lib/prisma";

export async function GET() {
  const applications = await prisma.application.findMany();

  return Response.json(applications);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      typeof body.company !== "string" ||
      body.company.trim() === ""
    ) {
      return Response.json(
        { error: "Company is required." },
        { status: 400 }
      );
    }

    if (
      typeof body.position !== "string" ||
      body.position.trim() === ""
    ) {
      return Response.json(
        { error: "Position is required." },
        { status: 400 }
      );
    }

    if (
      typeof body.status !== "string" ||
      body.status.trim() === ""
    ) {
      return Response.json(
        { error: "Status is required." },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        company: body.company.trim(),
        position: body.position.trim(),
        status: body.status.trim(),
      },
    });

    return Response.json(application, { status: 201 });

  } catch (error) {
    console.error("Failed to create application:", error);

    return Response.json(
      { error: "Failed to create application." },
      { status: 500 }
    );
  }
}