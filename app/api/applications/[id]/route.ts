import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!body.status || typeof body.status !== "string") {
      return Response.json(
        { error: "Status is required." },
        { status: 400 }
      );
    }

    const application = await prisma.application.update({
      where: {
        id: Number(id),
      },
      data: {
        status: body.status,
      },
    });

    return Response.json(application);
  } catch (error) {
    console.error("Failed to update application:", error);

    return Response.json(
      { error: "Failed to update application." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.application.delete({
      where: {
        id: Number(id),
      },
    });

    return Response.json(
      { message: "Application deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to delete application:", error);

    return Response.json(
      { error: "Failed to delete application." },
      { status: 500 }
    );
  }
}