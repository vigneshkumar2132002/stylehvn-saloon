const SHEET_NAME = "STYLEHVN Salon Appointment Bookings";

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Booking sheet not found");

    sheet.appendRow([
      new Date(data.submittedAt), data.name, data.phone, data.email,
      data.service, data.date, data.time, data.message, data.status || "New",
      data.source || "stylehvnunisexsalon.com"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
