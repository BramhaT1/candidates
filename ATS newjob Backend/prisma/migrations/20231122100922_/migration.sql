BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Application] (
    [id] INT NOT NULL,
    [jobTitle] NVARCHAR(1000) NOT NULL,
    [jobDescription] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [location] NVARCHAR(1000) NOT NULL,
    [skillDropdown] NVARCHAR(1000) NOT NULL,
    [education] NVARCHAR(1000) NOT NULL,
    [workExp] NVARCHAR(1000) NOT NULL,
    [experienceLevel] NVARCHAR(1000) NOT NULL,
    [skillRequirement] NVARCHAR(1000) NOT NULL,
    [contactNumber] INT NOT NULL,
    CONSTRAINT [Application_id_key] UNIQUE NONCLUSTERED ([id])
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
