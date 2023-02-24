function editElement(ref, match, replacer) {
    const text = ref.textContent;
    const result = text.replace(match, replacer);

    ref.textContent = result;
}