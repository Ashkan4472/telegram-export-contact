export class ContactModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;

  static getVcfText(firstName: string, lastName: string, phoneNumber: string) {
    // tslint:disable-next-line: max-line-length
    return `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${firstName ? firstName + ' ' : ''}${lastName}\nN;CHARSET=UTF-8:${firstName};${lastName};;;\nTEL;TYPE=CELL:${phoneNumber}\nREV:${(new Date()).toISOString()}\nEND:VCARD\n`;
  }

  static contactDTO(contact: any): ContactModel {
    return {
      firstName: contact.first_name,
      lastName: contact.last_name,
      phoneNumber: contact.phone_number,
    }
  }
}
