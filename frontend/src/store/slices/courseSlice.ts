import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { coursesApiClient } from "@/services/interceptors";

export interface Lecture {
  _id: string;
  title: string;
  description: string;
  lecture: {
    public_id: string;
    secure_url: string;
  };
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  category: string;
  createdBy: string;
  numberOfLectures: number;
  thumbnail?: {
    public_id: string;
    secure_url: string;
  };
  lectures?: Lecture[];
  createdAt: string;
  updatedAt: string;
}

interface CourseState {
  courses: Course[];
  selectedCourseLectures: Lecture[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  selectedCourseLectures: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.get("/");
      if (response && response.success) {
        return response.courses as Course[];
      }
      return rejectWithValue(response?.message || "Failed to fetch courses.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to fetch courses.";
      return rejectWithValue(message);
    }
  }
);

export const createNewCourse = createAsyncThunk(
  "courses/createNewCourse",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.post("/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to create course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to create course.";
      return rejectWithValue(message);
    }
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, formData }: { id: string; formData: any }, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.put(`/${id}`, formData);
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to update course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to update course.";
      return rejectWithValue(message);
    }
  }
);

export const deleteCourseById = createAsyncThunk(
  "courses/deleteCourseById",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.delete(`/${courseId}`);
      if (response && response.success) {
        return courseId;
      }
      return rejectWithValue(response?.message || "Failed to delete course.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to delete course.";
      return rejectWithValue(message);
    }
  }
);

export const fetchCourseLectures = createAsyncThunk(
  "courses/fetchCourseLectures",
  async (courseId: string, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.get(`/${courseId}`);
      if (response && response.success) {
        return response.lectures as Lecture[];
      }
      return rejectWithValue(response?.message || "Failed to fetch lectures.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to fetch lectures.";
      return rejectWithValue(message);
    }
  }
);

export const addLectureToCourse = createAsyncThunk(
  "courses/addLectureToCourse",
  async ({ courseId, formData }: { courseId: string; formData: FormData }, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.post(`/${courseId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response && response.success && response.course) {
        return response.course as Course;
      }
      return rejectWithValue(response?.message || "Failed to add lecture.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to add lecture.";
      return rejectWithValue(message);
    }
  }
);

export const removeLectureFromCourse = createAsyncThunk(
  "courses/removeLectureFromCourse",
  async ({ courseId, lectureId }: { courseId: string; lectureId: string }, { rejectWithValue }) => {
    try {
      const response: any = await coursesApiClient.delete("/", {
        params: { courseId, lectureId },
      });
      if (response && response.success) {
        return { courseId, lectureId };
      }
      return rejectWithValue(response?.message || "Failed to remove lecture.");
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Failed to remove lecture.";
      return rejectWithValue(message);
    }
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    clearCourseError: (state) => {
      state.error = null;
    },
    clearSelectedLectures: (state) => {
      state.selectedCourseLectures = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Courses
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Create Course
      .addCase(createNewCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        state.courses.push(action.payload);
      })
      // Update Course
      .addCase(updateCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      // Delete Course
      .addCase(deleteCourseById.fulfilled, (state, action: PayloadAction<string>) => {
        state.courses = state.courses.filter((c) => c._id !== action.payload);
      })
      // Fetch Lectures
      .addCase(fetchCourseLectures.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourseLectures.fulfilled, (state, action: PayloadAction<Lecture[]>) => {
        state.status = "succeeded";
        state.selectedCourseLectures = action.payload;
      })
      .addCase(fetchCourseLectures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      // Add Lecture
      .addCase(addLectureToCourse.fulfilled, (state, action: PayloadAction<Course>) => {
        const index = state.courses.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      // Remove Lecture
      .addCase(removeLectureFromCourse.fulfilled, (state, action) => {
        state.selectedCourseLectures = state.selectedCourseLectures.filter(
          (l) => l._id !== action.payload.lectureId
        );
        const course = state.courses.find((c) => c._id === action.payload.courseId);
        if (course) {
          course.numberOfLectures = Math.max(0, course.numberOfLectures - 1);
        }
      });
  },
});

export const { clearCourseError, clearSelectedLectures } = courseSlice.actions;
export default courseSlice.reducer;
