import { ButtonProps } from "../types";

export const Button = ({ text, onClick, className }: ButtonProps): HTMLButtonElement => {
  const button = document.createElement("button");
  if (className) {
    button.classList.add(className);
  }
  button.innerHTML = text ? text : "";

  button.onclick = onClick;
  if (className === "delete-button") {
    button.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="#838383" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="16" fill="white"/>
<path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="#838383"/>
</svg>
`;
  }
  return button;
}
