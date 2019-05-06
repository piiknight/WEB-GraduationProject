import { ContentState, EditorState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

export const createEditorStateFromHTML = htmlString => {
  const blocksFromHtml = htmlToDraft(htmlString);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap,
  );
  return EditorState.createWithContent(contentState);
};
