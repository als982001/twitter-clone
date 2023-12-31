import mongoose from "mongoose";

export const getTwit = async (twitId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/twit?twitId=${twitId}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const getTwitsFromIndex = async (idx: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/twits?idx=${idx}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 400, data: [] };
  }
};

export const getTwitsByNickname = async (idx: number, nickname: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/twits?idx=${idx}&nickname=${nickname}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 400, data: [] };
  }
};

export const postTwit = async (newTwit: {
  imageUrl: string;
  content: string;
}) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/twit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTwit),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const postLike = async (twitId: mongoose.Types.ObjectId | string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/twit/like?twitId=${twitId}`,
      {
        method: "PATCH",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const postComment = async (
  twitId: mongoose.Types.ObjectId | string,
  comment: string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?twitId=${twitId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const getComments = async (commentIds: string[]) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentIds),
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: [] };
  }
};

export const postCommentLike = async (
  commentId: mongoose.Types.ObjectId | string
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments/like?commentId=${commentId}`,
      {
        method: "PATCH",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error) {
    return { status: 400, data: null };
  }
};

export const getCommentsByNickname = async (nickname: string, idx: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?idx=${idx}&nickname=${nickname}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 400, data: [] };
  }
};
