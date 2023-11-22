BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[ApplyJob] (
    [id] INT NOT NULL IDENTITY(1,1),
    [jobTitle] NVARCHAR(1000) NOT NULL,
    [jobDescription] NVARCHAR(1000),
    [payscale] NVARCHAR(1000) NOT NULL,
    [experienceLevel] INT NOT NULL,
    [skillsRequired] NVARCHAR(1000) NOT NULL,
    [skillsMatrix] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [ApplyJob_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [ApplyJob_jobTitle_key] UNIQUE NONCLUSTERED ([jobTitle])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
