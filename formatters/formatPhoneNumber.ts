export const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) {
        return '';
    }

    const digitsOnly = phoneNumber.replace(/\D/g, '');

    const country = digitsOnly.slice(0, 2);

    const operator = digitsOnly.slice(2, 5);

    const group = digitsOnly.slice(5, 7);

    const lastGroup = digitsOnly.slice(7, 9);

    const endGroup = digitsOnly.slice(9, 12);

    const formattedPhoneNumber: string = `+${country}(${operator}) ${group} ${lastGroup} ${endGroup}`;

    return formattedPhoneNumber;
};
