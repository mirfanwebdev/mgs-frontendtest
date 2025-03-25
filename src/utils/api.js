const baseUrl = "https://strapi-admin.megagigasolusindo.co.id/";

export async function getService() {
  const url = baseUrl + "api/services?locale=id";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getReason() {
  const url = baseUrl + "api/whies";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postContact(payload) {
  const url = baseUrl + "api/contact-uses";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          message: payload.message,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
